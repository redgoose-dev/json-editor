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
 * version : 0.2
 * website : http://redgoose.me
 * @param Array $wrap : json editor 껍데기 엘리먼트
 * @return void
 */
var JSONEditor = function($wrap)
{
	var self = this;

	self.$wrap = $wrap;
	self.$index = null;

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
		 * @param {DOM} element : 컨테이너 엘리먼트
		**/
		this.removeBR = function (element)
		{
			element.find('br').replaceWith(' ');
		}
	
		/**
		 * string limiter
		 * 글자길이를 체크하여 지정된 수치보다 높으면 잘라버립니다.
		 * 
		 * @param {DOM} element : 글이 들어있는 엘리먼트
		 * @param {Number} limit : 글자 갯수제한
		**/
		this.stringLimiter = function(element, limit)
		{
			var str = element.text();
			if (str.length > limit)
			{
				element.text(str.substring(0, limit));
			}
		}
	
		/**
		 * remove space
		 * 공백을 없애줍니다.
		 * 
		 * @param {DOM} element : 내용이 적혀있는 엘리먼트입니다.
		**/
		this.removeSpace = function(element)
		{
			element.text(element.text().replace(/\s+/g, ''));
		}
	}


	/**
	 * Context class
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
		 * @return {DOM}
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
		}

		/**
		 * create context
		 */
		var createContext = function()
		{
			self.$el = template(tree);
			parent.$wrap.append(self.$el);
		}

		/**
		 * context event
		 * 
		 * @param {DOM} $nav
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
		}


		/**
		 * context open
		 * 
		 * @param {DOM} $item
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
		}
	
		/**
		 * context close
		 */
		this.off = function()
		{
			self.active = null;
			self.$el.removeAttr('type');
			$('html').off('click');
		}


		// act
		createContext();
		contextEvent(self.$el);
	}


	/**
	 * init
	 */
	var init = function()
	{
		self.$index = $('<div class="index"/>');
		self.$index.append(createRoot());
		self.$wrap.prepend(self.$index);
	}

	/**
	 * node template
	 * 
	 * @param {String} type
	 * @return {DOM}
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
	}

	/**
	 * 버튼을 선택해주는 엘리먼트
	 * 
	 * @param {DOM} $li : 버튼을 선택하는 li엘리먼트
	 * @return {DOM} : 버튼 엘리먼트
	 */
	var selectButtons = function($li)
	{
		return $li.children('dl').children('dt').children('button');
	}

	/**
	 * Object나 Array 카운트 갱신
	 * 
	 * @param {DOM} $li : 카운트 갱신할 li 엘리먼트
	 */
	var updateCount = function($li)
	{
		var itemCount = $li.find('> ul > li').length;
		$li.find('> dl em.count').text(itemCount);
	}

	/**
	 * 배열번호에 사용되는 순서에 대한 번호갱신
	 * 
	 * @param {DOM} $items
	 */
	var updateNumber = function($items)
	{
		$items.each(function(k){
			$(this).find('> dl > dt > em.no').text(k);
		});
	}

	/**
	 * key값 텍스트 인풋에서 포커스가 떨어졌을때 문자 검사를 해주는 역할을 한다.
	 * 
	 * @param {DOM} $item
	 */
	var inputCheckEvent = function($item)
	{
		var $strong = $item.find('> dl > dt > strong');
		$strong.on('blur', function(){
			util.removeBR($(this));
			util.removeSpace($(this));
			util.stringLimiter($(this), 20);
		});
	}

	/**
	 * Context와 접었더 펴는 버튼 이벤트를 만들어준다.
	 * 
	 * @param {DOM} buttons
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
	}


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
				return (container.el.parent().attr('type') == 'String') ? false : true;
			}
		});
	}

	/**
	 * create root node
	 * 
	 * @return {DOM}
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
	}


	/**
	 * 아이템을 삽입해준다.
	 * 
	 * @param {DOM} $active : 선택된 아이템
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
	}

	/**
	 * 아이템의 타입을 바꿔준다.
	 * 
	 * @param {DOM} active : 선택된 아이템
	 * @param {String} type : 바꾸고싶은 타입 (String, Object, Array)
	 */
	this.typeItem = function($active, type)
	{
		$active.attr('type', type);
		$active.find('> dl > dt > strong').attr('data-ph', type);
	}

	/**
	 * 아이템 복제
	 * 
	 * @param {DOM} $target : 복사할 아이템
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
	}

	/**
	 * 아이템 삭제
	 * 
	 * @param {DOM} $target
	 */
	this.removeItem = function($target)
	{
		var $parentItem = $target.parent().parent();
		$target.remove();
		updateCount($parentItem);
	}

	/**
	 * 가져온 Object 데이터로 아이템 트리 만들기
	 * 
	 * @param {Object} data
	 */
	this.importJSON = function(data)
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

				self.insertItem($item, type, data, function($item){
					if (type !== 'String' && Object.size(value) > 0)
					{
						items(value, $item);
					}
				});
			});
		}
		items(data, self.$index.find('[loc=root]'));
	}

	/**
	 * 아이템 트리의 내용을 문자형태로 내보내기
	 * 
	 * @param {Number} space : 탭 사이즈(스페이스값)
	 * @return {String} : 문자로 변형된 json데이터
	 */
	this.exportJSON = function(space)
	{
		function items($li, obj)
		{
			var $lis = $li.children('ul').children('li');
			if ($lis.length)
			{
				$lis.each(function(){
					var
						$this = $(this)
						,key = $this.find('> dl > dt > strong').text()
						,value = $this.find('> dl > dd > span').text()
					;
					switch($(this).attr('type'))
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
								obj.push(items($this, new Array()));
							}
							else
							{
								obj[key] = items($this, new Array());
							}
							break;
						case 'Object':
							if ($li.attr('type') == 'Array')
							{
								obj.push(items($this, new Object()));
							}
							else
							{
								obj[key] = items($this, new Object());
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
			,($root.attr('type') == 'Array') ? new Array() : new Object()
		);
		return JSON.stringify(json, null, (space) ? space : 0);
	}


	// act
	init();

}

// context tree data
JSONEditor.prototype.contextTree = [
	{
		role : 'Type'
		,roles : [
			{role:'Object'}
			,{role:'Array'}
			,{role:'String'}
		]
	}
	,{
		role : 'Insert'
		,roles : [
			{role:'Object'}
			,{role:'Array'}
			,{role:'String'}
		]
	}
	,{role : 'Duplicate'}
	,{role : 'Remove'}
];