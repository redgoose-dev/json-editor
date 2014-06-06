/**
 * Util Class
 * 
 * @author Redgoose (http://redgoose.me)
**/
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
