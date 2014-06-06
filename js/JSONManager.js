function log(o){console.log(o);}

;(function($){
	var
		$index = $('#index')
		,$context = $('#context')
		,$root = $index.find('li[loc=root]')
		,context = new ContextEvent({
			context : $context
			,index : $index
		})
		,index = new IndexEvent({
			index : $index
			,context : $context
			,_context : context
		})
	;

	// dummy data
	var dummy = '{"과일들":["111","222",{"KKK":"VVV","KKK2":"VVV"}]}';
	//var dummy = '["aaa","bbb"]';

	// import json
	try {
		var json = JSON.parse(dummy);
	}
	catch(e) {
		var json = new Object();
	}
	if (Array.isArray(json))
	{
		index.typeItem({
			active : $root,
			type : 'Array'
		});
	}
	index.importJSON(json, $root);

	// export JSON
	$('button[role=btn_toJSON]').on('click', function(){
		$('#result').text(index.exportJSON(4));
	});
})(jQuery);