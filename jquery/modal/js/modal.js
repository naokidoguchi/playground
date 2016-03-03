// modal
$(function() {
	
	// 変数を作らないとクリックするたびインスタンス化してしまうため($がインスタンス化するという意味)パフォーマンスが落ちる
	var $modal = $('.js-modalWindow');

	$('button').on('click', function() {
		$modal.fadeIn();
	});

	$modal.on('click', function(){
		$modal.fadeOut();
	});

});


// magnification
$(function() {

var open = function(event){
	event.data.fadeIn();
}

var close = function(event){
	event.data.fadeOut();
}

$('.thumbnail--01').on('click', $('.js-modal--01'), open );
$('.thumbnail--02').on('click', $('.js-modal--02'), open );
$('.thumbnail--03').on('click', $('.js-modal--03'), open );

$('.js-modal--01').on('click', $('.js-modal--01'), close );
$('.js-modal--02').on('click', $('.js-modal--02'), close );
$('.js-modal--03').on('click', $('.js-modal--03'), close );

});
