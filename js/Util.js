function Util()
{
	// remove <br>
	this.removeBR = function (element)
	{
		element.find('br').replaceWith(' ');
	}

	// string limiter
	this.stringLimiter = function(element, limit)
	{
		var str = element.text();
		if (str.length > limit)
		{
			element.text(str.substring(0, limit));
		}
	}

	// remove space
	this.removeSpace = function(element)
	{
		element.text(element.text().replace(/\s+/g, ''));
	}
}
