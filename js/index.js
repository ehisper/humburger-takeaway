/*
* @Author: Administrator
* @Date:   2017-10-18 14:06:41
* @Last Modified by:   Administrator
* @Last Modified time: 2017-10-18 16:49:35
*/
(function (win){
	function caluFontSize () {
		var html = document.documentElement,
			clientWidth = html.clientWidth;
		if(clientWidth > 750){
			clientWidth = 750;
		}
		html.style.fontSize = clientWidth / 750*20;
	}
	window.addEventListener('DOMContentLoaded',caluFontSize, false)
	window.addEventListener('resize',caluFontSize, false)
})(window)