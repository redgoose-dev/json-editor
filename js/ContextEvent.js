function ContextEvent(get)
{
	var
		_context = this,
		_index = null,
		wrap = $('html'),
		index = get.index
		context = get.context,
		active = null
	;

	/* Methods */
	// get index
	this.getIndex = function(obj)
	{
		_index = obj;
	}

	// on
	this.on = function(li, button)
	{
		active = li;
		context
			.attr('type', li.attr('type'))
			.css({
				left : button.position().left + button.outerWidth()
				,top : button.position().top - 3
			})
		;
		if (li.attr('loc') == 'root')
		{
			context.attr('loc', li.attr('loc'))
		}
		else
		{
			context.removeAttr('loc');
		}
		wrap.on('click', function(){
			_context.off();
		});
	}

	// off
	this.off = function(button)
	{
		active = null;
		context.removeAttr('type');
		wrap.off();
	}

	/* Context navigation */
	// items event
	context.find('li').on('click', function(e){
		e.stopPropagation();
	});

	context.find('li[role=Type] li').on('click', function(){
		_index.typeItem({
			active : active,
			type : $(this).attr('role')
		});
		_context.off();
	});

	context.find('li[role=Insert] li').on('click', function(){
		_index.insertItem({
			active : active,
			type : $(this).attr('role'),
			data : null
		});
		_context.off();
	});

	context.find('li[role=Duplicate]').on('click', function(){
		_index.duplicateItem(active);
		_context.off();
	});

	context.find('li[role=Remove]').on('click', function(){
		_index.removeItem(active);
		_context.off();
	});
}