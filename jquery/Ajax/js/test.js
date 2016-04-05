$(function(){
	$.ajax({
		url: "http://kumao-no-mori.com/2016/01/07/jquery-cookie-js-%E3%81%A7%E3%81%AEcookie%E3%81%AE%E6%93%8D%E4%BD%9C/"
	}).done(function(data){ //ajaxの通信に成功した場合
		alert("success!");
		$(".example").html(data);
	}).fail(function(data){ //ajaxの通信に失敗した場合
		alert("error!");
	});
});
