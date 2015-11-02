function log(o){console.log(o);}
Object.size = function(obj) {
	var size = 0, key;
	for (key in obj) {
		if (obj.hasOwnProperty(key)) size++;
	}
	return size;
};


/**
 * JSON Editor Class
 *
 * author : Redgoose (2014.03)
 * version : 0.3
 * website : http://redgoose.me
 * @Param {Array} $wrap : json editor 껍데기 엘리먼트
 * @Param {Boolean} usePreview : 프리뷰 창을 사용할건지에 대한 값
 * @return void
 */
var JSONEditor = function($wrap, usePreview)
{
	var self = this;

	self.$wrap = $wrap;
	self.$index = null;
	self.$preview = null;

	var util = new Util();
	var context = new Context(this, this.contextTree);


	/**
	 * Util Class
	 */
	function Util()
	{
		/**
		 * remove <br/>
		 * <br/> 엘리먼트를 공백으로 변환시켜줍니다.
		 *
		 * @param {Object} element : 컨테이너 엘리먼트
		**/
		this.removeBR = function (element)
		{
			element.find('br').replaceWith(' ');
		};

		/**
		 * string limiter
		 * 글자길이를 체크하여 지정된 수치보다 높으면 잘라버립니다.
		 *
		 * @param {Object} element : 글이 들어있는 엘리먼트
		 * @param {Number} limit : 글자 갯수제한
		**/
		this.stringLimiter = function(element, limit)
		{
			var str = element.text();
			if (str.length > limit)
			{
				element.text(str.substring(0, limit));
			}
		};

		/**
		 * remove space
		 * 공백을 없애줍니다.
		 *
		 * @param {Object} element : 내용이 적혀있는 엘리먼트입니다.
		**/
		this.removeSpace = function(element)
		{
			element.text(element.text().replace(/\s+/g, ''));
		}
	}


	/**
	 * Context class
	 * 기능을 실행하는 context 메뉴
	 *
	 * @param {JSONEditor} getParent
	 * @param {Array} tree
	 */
	function Context(getParent, tree)
	{
		var self = this;
		var parent = getParent;

		self.$el = null;
		self.active = null;

		/**
		 * context template
		 *
		 * @param {Object} obj
		 * @return {Object}
		 */
		var template = function(obj)
		{
			function node(obj)
			{
				var str = '<ul>';
				for (var o in obj)
				{
					str += '<li role="' + obj[o].role + '">';
					if (obj[o].roles)
					{
						str += '<div>';
						str += node(obj[o].roles);
						str += '</div>';
					}
					str += '<button type="button">' + obj[o].role + '</button>';
					str += '</li>';
				}
				str += '</ul>';
				return str;
			}
			var str = '<nav class="context">';
			str += node(obj);
			str += '</nav>';
			return $(str);
		};

		/**
		 * create context
		 */
		var createContext = function()
		{
			self.$el = template(tree);
			parent.$wrap.append(self.$el);
		};

		/**
		 * context event
		 *
		 * @param {Object} $nav
		 */
		var contextEvent = function($nav)
		{
			$nav.find('li').on('click', function(e){
				e.stopPropagation();
			});

			$nav.find('li[role=Type] li').on('click', function(){
				parent.typeItem(self.active, $(this).attr('role'));
				context.off();
			});

			$nav.find('li[role=Insert] li').on('click', function(){
				parent.insertItem(self.active, $(this).attr('role'), null);
				context.off();
			});

			$nav.find('li[role=Duplicate]').on('click', function(){
				parent.duplicateItem(self.active);
				context.off();
			});

			$nav.find('li[role=Remove]').on('click', function(){
				parent.removeItem(self.active);
				context.off();
			});
		};


		/**
		 * context open
		 *
		 * @param {Object} $item
		 * @param {Object} button
		 */
		this.on = function($item, button)
		{
			self.active = $item;
			self.$el
				.attr('type', $item.attr('type'))
				.css({
					left : button.position().left + button.outerWidth()
					,top : button.position().top - 3
				})
			;
			if ($item.attr('loc') == 'root')
			{
				self.$el.attr('loc', $item.attr('loc'))
			}
			else
			{
				self.$el.removeAttr('loc');
			}
			$('html').on('click', function(){
				self.off();
			});
		};

		/**
		 * context close
		 */
		this.off = function()
		{
			self.active = null;
			self.$el.removeAttr('type');
			$('html').off('click');
		};


		// act
		createContext();
		contextEvent(self.$el);
	}


	/**
	 * init
	 */
	var init = function()
	{
		self.$index = $('<div class="index" />');
		self.$index.append(createRoot());
		self.$wrap.prepend(self.$index);

		self.$preview = $('<pre class="preview" />');
		self.$wrap.append(self.$preview);
		self.$wrap.addClass('preview');

		updatePreview();
	};

	/**
	 * node template
	 *
	 * @param {String} type
	 * @return {Object}
	 */
	var template = function(type)
	{
		var str = '<li type="' + type + '" class="on">\n';
		str += '<dl>';
		str += '<dt>';
		str += '<button type="button" role="move">move</button>';
		str += '<button type="button" role="control">control</button>';
		str += '<em class="no">0</em>';
		str += '<button type="button" role="toggle">toggle</button>';
		str += '<strong contenteditable="true" spellcheck="false" data-ph="' + type + '"></strong>';
		str += '<span class="type"></span>';
		str += '<em class="count">0</em>';
		str += '</dt>';
		str += '<dd>';
		str += '<span contenteditable="true" spellcheck="false"></span>';
		str += '</dd>';
		str += '</dl>';
		str += '<ul></ul>';
		str += '</li>';
		return $(str);
	};

	/**
	 * 버튼을 선택해주는 엘리먼트
	 *
	 * @param {Object} $li : 버튼을 선택하는 li엘리먼트
	 * @return {Object} : 버튼 엘리먼트
	 */
	var selectButtons = function($li)
	{
		return $li.children('dl').children('dt').children('button');
	};

	/**
	 * Object나 Array 카운트 갱신
	 *
	 * @param {Object} $li : 카운트 갱신할 li 엘리먼트
	 */
	var updateCount = function($li)
	{
		var itemCount = $li.find('> ul > li').length;
		$li.find('> dl em.count').text(itemCount);
	};

	/**
	 * 배열번호에 사용되는 순서에 대한 번호갱신
	 *
	 * @param {Object} $items
	 */
	var updateNumber = function($items)
	{
		$items.each(function(k){
			$(this).find('> dl > dt > em.no').text(k);
		});
	};

	/**
	 * key값 텍스트 인풋에서 포커스가 떨어졌을때 문자 검사를 해주는 역할을 한다.
	 *
	 * @param {Object} $item
	 */
	var inputCheckEvent = function($item)
	{
		var $strong = $item.find('> dl > dt > strong');
		var $inputs = $item.find('> dl > dt > strong, > dl > dd > span');

		$strong.on('blur', function(){
			util.removeBR($(this));
			util.removeSpace($(this));
			util.stringLimiter($(this), 20);
		});
		// preview update
		$inputs.on('blur', function(){
			updatePreview();
		});
	};

	/**
	 * Context와 접었더 펴는 버튼 이벤트를 만들어준다.
	 *
	 * @param {Object} $buttons
	 */
	var buttonsEvent = function($buttons)
	{
		var $node = $buttons.closest('li');

		// control
		$buttons.filter('[role=control]').on('click', function(e){
			e.stopPropagation();
			context.off($node);
			context.on($node, $(this));
		});

		// toggle
		$buttons.filter('[role=toggle]').on('click', function(e){
			$node.toggleClass('on')
		});
	};

	/**
	 * drag event
	 *
	 * @param {DOM} $item
	 */
	var dragEvent = function($item)
	{
		// drag and drop event
		var adjustment, beforeItem;
		$item.children('ul').sortable({
			itemSelector : 'li'
			,handle : 'button[role=move]'
			,group : 'index'
			,pullPlaceholder: true
			,onDrop : function(item, targetContainer, _super) {
				_super(item);

				updateCount(beforeItem.parent());
				updateCount(targetContainer.el.parent());

				updateNumber(beforeItem.children());
				updateNumber(targetContainer.el.children());

				updatePreview();

				beforeItem = adjustment = null;
			}
			,onDragStart : function($el, container, _super) {
				var
					offset = $el.offset()
					,pointer = container.rootGroup.pointer
				;
				adjustment = {
					left: pointer.left - offset.left
					,top: pointer.top - offset.top
				};
				beforeItem = container.el;
				_super($el, container)
			}
			,onDrag : function($el, position) {
				$el.css({
					left: position.left - adjustment.left
					,top: position.top - adjustment.top
				});
			}
			,isValidTarget : function ($el, container) {
				return (container.el.parent().attr('type') != 'String');
			}
		});
	};

	/**
	 * Create root node
	 *
	 * @return {Object}
	 */
	var createRoot = function()
	{
		var $ul = $('<ul/>');
		var $li = template('Object');

		$li.attr('loc', 'root');
		$li.find('[contenteditable]').attr('contenteditable', 'false');
		$li.find('[role=move]').remove();

		$ul.append($li);

		buttonsEvent(selectButtons($li));
		dragEvent($li);

		return $ul;
	};

	/**
	 * Updata preview
	 */
	var updatePreview = function()
	{
		self.$preview.text(self.export(5));
	};


	/**
	 * Insert item
	 * 아이템을 삽입해준다.
	 *
	 * @param {Object} $active : 선택된 아이템
	 * @param {String} type : 추가할 아이템 타입 (String, Object, Array)
	 * @param {Object} data : 추가할 아이템의 데이터
	 * @param {Function} complete
	 */
	this.insertItem = function($active, type, data, complete)
	{
		var $ul = $active.children('ul');
		var $item = template(type);

		$item.find('em.no').text($ul.children('li').length);

		// push data
		if (data)
		{
			$item.find('dt strong').text(data.key);
			$item.find('dd span').text(data.value);
		}

		buttonsEvent(selectButtons($item));
		inputCheckEvent($item);
		$active.addClass('on').children('ul').append($item);
		updateCount($active);

		if (complete)
		{
			complete($item);
		}
	};

	/**
	 * Change type
	 * 아이템의 타입을 바꿔준다.
	 *
	 * @param {Object} $active : 선택된 아이템
	 * @param {String} type : 바꾸고싶은 타입 (String, Object, Array)
	 */
	this.typeItem = function($active, type)
	{
		var $key = $active.find('> dl > dt > strong');
		var $value = $active.find('> dl > dd > span');

		$active.attr('type', type);
		$key.attr('data-ph', type);

		switch(type)
		{
			case "Number":
				var value = parseInt($value.text());
				value = (!value) ? 0 : value;
				$value.text(value);
				break;
			case "Boolean":
				$value.text(!!($value.text()));
				break;
		}

		updatePreview();
	};

	/**
	 * Duplicate item
	 * 아이템 복제
	 *
	 * @param {Object} $target : 복사할 아이템
	 */
	this.duplicateItem = function($target)
	{
		var $copy = $target.clone().insertAfter($target).find('li').andSelf();
		$copy.each(function(){
			buttonsEvent(selectButtons($(this)));
			inputCheckEvent($(this));
		});
		updateCount($target.parent().parent());
		updateNumber($target.parent().children());
		updatePreview();
	};

	/**
	 * Remove item
	 * 아이템 삭제
	 *
	 * @param {Object} $target
	 */
	this.removeItem = function($target)
	{
		var $parentItem = $target.parent().parent();
		$target.remove();
		updateCount($parentItem);
		updatePreview();
	};

	/**
	 * Import JSON
	 * 에디터로 json 데이터 가져오기(add)
	 *
	 * @param {Object} data
	 */
	this.import = function(data)
	{
		function items(getData, $item)
		{
			$.each(getData, function(index, value){
				var
					data = {key : index, value : value}
					,type = null
				;

				if (typeof value === 'string')
				{
					type = 'String';
				}
				else if (typeof value === 'object')
				{
					type = (Array.isArray(value)) ? 'Array' : 'Object';
				}
				else if (typeof value === 'number')
				{
					type = 'Number';
				}
				else if (typeof value === 'boolean')
				{
					type = 'Boolean';
				}

				self.insertItem($item, type, data, function($item){
					if (type !== 'String' && Object.size(value) > 0)
					{
						items(value, $item);
					}
				});
			});
		}
		items(data, self.$index.find('[loc=root]'));
		updatePreview();
	};

	/**
	 * Replace JSON
	 * 에디터로 json 데이터 가져오기(replace)
	 *
	 * @param {Object} data
	 */
	this.replace = function(data)
	{
		var $root = this.$index.find('[loc=root]');
		var $lis = $root.find('> ul > li');

		this.removeItem($lis);
		if (Array.isArray(data))
		{
			this.typeItem($root, 'Array');
		}
		this.import(data);
	};

	/**
	 * 아이템 트리의 내용을 문자형태로 내보내기
	 *
	 * @param {Number|Boolean} getSpace 숫자 : 스페이스 수, true : 탭, false : 0
	 * @return {String} : 문자로 변형된 json데이터
	 */
	this.export = function(getSpace)
	{
		function items($li, obj)
		{
			var $lis = $li.children('ul').children('li');
			if ($lis.length)
			{
				$lis.each(function(){
					var
						$this = $(this),
						key = $this.find('> dl > dt > strong').text(),
						value = $this.find('> dl > dd > span').text(),
						$parent = $this.parent().parent()
					;

					if (($parent.attr('type') !== 'Array') && !key)
					{
						return true;
					}

					switch($this.attr('type'))
					{
						case 'String':
							if ($li.attr('type') == 'Array')
							{
								obj.push(value);
							}
							else
							{
								obj[key] = value;
							}
							break;
						case 'Array':
							if ($li.attr('type') == 'Array')
							{
								obj.push(items($this, []));
							}
							else
							{
								obj[key] = items($this, []);
							}
							break;
						case 'Object':
							if ($li.attr('type') == 'Array')
							{
								obj.push(items($this, {}));
							}
							else
							{
								obj[key] = items($this, {});
							}
							break;
						case 'Number':
							value = parseInt(value);
							if ($li.attr('type') == 'Array')
							{
								obj.push(value);
							}
							else
							{
								obj[key] = value;
							}
							break;
						case 'Boolean':
							value = !!(value == 'true' || value == 1);
							if ($li.attr('type') == 'Array')
							{
								obj.push(value);
							}
							else
							{
								obj[key] = !!(value == 'true' || value == 1);
							}
							break;
					}
				});
			}
			return obj;
		}

		var $root = self.$index.find('[loc=root]');
		var json = items(
			$root
			,($root.attr('type') == 'Array') ? [] : {}
		);
		var space = (typeof getSpace === 'boolean') ? '\t' : 0;
		space = (typeof getSpace === 'number') ? getSpace : space;
		return JSON.stringify(json, null, space);
	};


	// act
	init();

};



// context tree data
JSONEditor.prototype.contextTree = [
	{
		role : 'Type'
		,roles : [
			{role:'Object'}
			,{role : 'Array'}
			,{role : 'String'}
			,{role : 'Number'}
			,{role : 'Boolean'}
		]
	}
	,{
		role : 'Insert'
		,roles : [
			{role : 'Object'}
			,{role : 'Array'}
			,{role : 'String'}
			,{role : 'Number'}
			,{role : 'Boolean'}
		]
	}
	,{role : 'Duplicate'}
	,{role : 'Remove'}
];
