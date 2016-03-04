$(function() {

	var itemList = [
		$('.js-slider__item:nth-child(1)'),
		$('.js-slider__item:nth-child(2)'),
		$('.js-slider__item:nth-child(3)')
	]



	var event = function() {
		var i = 0;
		i++
		itemList[i].fadeOut();
	};

	for(var i=0; i<=2; i++) {
		setInterval(event, 2000);
	}

});