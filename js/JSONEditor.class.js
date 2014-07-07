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
	var
		self = this
		,util = new Util()
		,context = new Context(this, this.contextTree)
	;

	self.$index = $wrap.children('div.index');
	self.$root = null;


	/**
	 * Util Class
	 * 
	 * @return void
	 */
	function Util()
	{
		/**
		 * remove <br/>
		 * <br/> 엘리먼트를 공백으로 변환시켜줍니다.
		 * 
		 * @param $ element : 컨테이너 엘리먼트
		**/
		this.removeBR = function (element)
		{
			element.find('br').replaceWith(' ');
		}
	
		/**
		 * string limiter
		 * 글자길이를 체크하여 지정된 수치보다 높으면 잘라버립니다.
		 * 
		 * @param $ element : 글이 들어있는 엘리먼트
		 * @param Number limit : 글자 갯수제한
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
		 * @param $ element : 내용이 적혀있는 엘리먼트입니다.
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
		var
			self = this
			,parent = getParent
			//,wrap = $('html')
		;

		self.$el = null;

		var template = function(obj)
		{
			str = '';
			str += '';
			log(obj)
			return $(str);
		}

		var createContext = function()
		{
			self.$el = $('<nav></nav>');
			var dd = template(tree);
			//log(self.$el);
			// $wrap에 nav 넣기
		}

		/* Methods */
		// on
		this.on = function(li, button)
		{
			active = li;
			$context
				.attr('type', li.attr('type'))
				.css({
					left : button.position().left + button.outerWidth()
					,top : button.position().top - 3
				})
			;
			if (li.attr('loc') == 'root')
			{
				$context.attr('loc', li.attr('loc'))
			}
			else
			{
				$context.removeAttr('loc');
			}
			wrap.on('click', function(){
				context.off();
			});
		}
	
		// off
		this.off = function()
		{
			active = null;
			$context.removeAttr('type');
			wrap.off();
		}

		createContext();
		/* Context navigation */
		// items event
/*
		$context.find('li').on('click', function(e){
			e.stopPropagation();
		});

		$context.find('li[role=Type] li').on('click', function(){
			self.typeItem({
				active : active,
				type : $(this).attr('role')
			});
			context.off();
		});
	
		$context.find('li[role=Insert] li').on('click', function(){
			self.insertItem({
				active : active,
				type : $(this).attr('role'),
				data : null
			});
			context.off();
		});
	
		$context.find('li[role=Duplicate]').on('click', function(){
			self.duplicateItem(active);
			context.off();
		});
	
		$context.find('li[role=Remove]').on('click', function(){
			self.removeItem(active);
			context.off();
		});
*/
	}


	var init = function()
	{
		self.$root = createRoot();
	}

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
	 * @param Array $li : 버튼을 선택하는 li엘리먼트
	 * @return Array button : 버튼 엘리먼트
	 */
	function selectButtons($li)
	{
		return $li.children('dl').children('dt').children('button');
	}

	/**
	 * Object나 Array 카운트 갱신
	 * 
	 * @param Array $li : 카운트 갱신할 li 엘리먼트
	 * @return void
	 */
	function updateCount($li)
	{
		var itemCount = $li.find('> ul > li').length;
		$li.find('> dl em.count').text(itemCount);
	}

	/**
	 * 배열번호에 사용되는 순서에 대한 번호갱신
	 * 
	 * @param Array $lis : li 엘리먼트들
	 * @return void
	 */
	function updateNumber($lis)
	{
		$lis.each(function(k){
			$(this).find('> dl > dt > em.no').text(k);
		});
	}

	/**
	 * key값 텍스트 인풋에서 포커스가 떨어졌을때 문자 검사를 해주는 역할을 한다.
	 * 
	 * @param Array $item : 검사할 li엘리먼트
	 * @return void
	 */
	function inputCheckEvent($item)
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
	 * @return void
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

		self.$index.append($ul.append($li));

		buttonsEvent(selectButtons($li));
		dragEvent($li);

		return $li;
	}


	/**
	 * 아이템을 삽입해준다.
	 * 
	 * @param Object opt : 아이템 삽입에 필요한 정보
	 * @param Array opt.active : 선택된 아이템
	 * @param String opt.type : 추가할 아이템 타입 (String, Object, Array)
	 * @param Object opt.data : 추가할 아이템의 데이터
	 * @param String opt.data.key : 아이템 key
	 * @param String opt.data.value : 아이템 value
	 * @param Fucntion opt.complete : 역할을 끝내고 실행할 함수
	 * @return void
	 */
	this.insertItem = function(opt)
	{
		var
			textAttr = {'contenteditable' : true, 'spellcheck' : false}
			,$ul = opt.active.children('ul')
			,itemNumber = $ul.children('li').length
			,$item = $('<li/>')
				.attr('type', opt.type)
				.addClass('on')
				.append(
					$('<dl/>')
						.append(
							$('<dt/>')
								.append(
									$('<button/>')
										.attr({'type' : 'button', 'role' : 'move'})
										.text('move')
								)
								.append(
									$('<button/>')
										.attr({'type' : 'button', 'role' : 'control'})
										.text('control')
								)
								.append(
									$('<em/>').addClass('no').text(itemNumber)
								)
								.append(
									$('<button/>')
										.attr({'type' : 'button', 'role' : 'toggle'})
										.text('toggle')
								)
								.append(
									$('<strong/>')
										.attr(textAttr)
										.attr('data-ph', opt.type)
								)
								.append(
									$('<span/>')
										.addClass('type')
								)
								.append(
									$('<em/>').addClass('count').text('0')
								)
						)
						.append(
							$('<dd/>')
								.append(
									$('<span/>')
										.attr(textAttr)
								)
						)
				)
				.append($('<ul/>'))
		;

		// push data
		if (opt.data)
		{
			$item.find('dt strong').text(opt.data.key);
			$item.find('dd span').text(opt.data.value);
		}

		buttonsEvent(selectButtons($item));
		inputCheckEvent($item);

		opt.active
			.addClass('on')
			.children('ul').append($item)
		;
		updateCount(opt.active);

		if (opt.complete)
		{
			opt.complete($item);
		}
	}

	/**
	 * 아이템의 타입을 바꿔준다.
	 * 
	 * @param Object opt
	 * @param Array opt.active : 선택된 아이템
	 * @param String opt.type : 바꾸고싶은 타입 (String, Object, Array)
	 * @return void
	 */
	this.typeItem = function(opt)
	{
		opt.active.attr('type', opt.type);
		opt.active.find('> dl > dt > strong').attr('data-ph', opt.type);
	}

	/**
	 * 아이템 복제
	 * 
	 * @param Array target : 복사할 아이템
	 * @return void
	 */
	this.duplicateItem = function(target)
	{
		var $copy = target.clone().insertAfter(target).find('li').andSelf();
		$copy.each(function(){
			buttonsEvent(selectButtons($(this)));
			inputCheckEvent($(this));
		});
		updateCount(target.parent().parent());
		updateNumber(target.parent().children());
	}

	/**
	 * 아이템 삭제
	 * 
	 * @param Array target : 삭제할 아이템
	 * @return void
	 */
	this.removeItem = function(target)
	{
		var $parentItem = target.parent().parent();
		target.remove();
		updateCount($parentItem);
	}

	/**
	 * 가져온 Object 데이터로 아이템 트리 만들기
	 * 
	 * @param Object data : 데이터
	 * @param Array $li : 삽입하려는 아이템
	 * @return void
	 */
	this.importJSON = function(data, $li)
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

				self.insertItem({
					active : $item,
					type : type,
					data : data,
					complete : function($item){
						if (type !== 'String' && Object.size(value) > 0)
						{
							items(value, $item);
						}
					}
				});
			});
		}
		items(data, $li);
	}

	/**
	 * 아이템 트리의 내용을 
	 * 
	 * @param Number space : 탭 사이즈(스페이스값)
	 * @return String : 문자로 변형된 json데이터
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
		var json = items(
			$root
			,($root.attr('type') == 'Array') ? new Array() : new Object()
		);
		return JSON.stringify(json, null, (space) ? space : 0);
	}


	// act
	init();

}

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
	,{
		role : 'Duplicate'
	}
	,{
		role : 'Remove'
	}
];