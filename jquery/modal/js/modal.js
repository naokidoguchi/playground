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

	var $area01 = $('.thumbnail--01');
	var $area02 = $('.thumbnail--02');
	var $area03 = $('.thumbnail--03');

	var $img01 = $('.js-modal--01');
	var $img02 = $('.js-modal--02');
	var $img03 = $('.js-modal--03');

	$area01.on('click', function() {
		$img01.fadeIn();
	});
	$img01.on('click', function() {
		$img01.fadeOut();
	});
	
	$area02.on('click', function() {
		$img02.fadeIn();
	});
	$img02.on('click', function() {
		$img02.fadeOut();
	});

	$area03.on('click', function() {
		$img03.fadeIn();
	});
	$img03.on('click', function() {
		$img03.fadeOut();
	});

});
