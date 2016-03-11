$(function() {

	var $slider = $('.slider'),
	 		$item = $('.slider__item');

			setInterval(slider, 2000);

	function slider() {

			wrap = $slider.width(),
			size = -300, // ここに動かしたい画像分widthを入れる
			int = parseInt(size),
			sAbs = Math.abs(int),
			num = $item.length,
			left = $slider.css('left'),
			mLeft = parseInt(left),
			slideSize = Math.abs(mLeft);

			if(slideSize >= wrap - sAbs) {
				$slider.animate({left: '0'}, 'slow');
			} else {
				$slider.animate({left: '+=' + int + 'px'}, 'slow');
			}
			console.log(slideSize,wrap - sAbs);
	}

});
