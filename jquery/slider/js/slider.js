$(function() {

	var $slider = $('.slider');

	setInterval(slider, 2000);

	function slider() {

			var wrap = $slider.width(),
			size = -300, // ここに動かしたい画像分widthを入れるだけ。あとcssで全体のwidthを設定。
			int = parseInt(size),
			sAbs = Math.abs(int),
			left = $slider.css('left'),
			mLeft = parseInt(left),
			slideSize = Math.abs(mLeft);



			if(slideSize >= wrap - sAbs) {
				$slider.animate({left: '0'}, 'slow');
			} else {
				$slider.animate({left: '+=' + int + 'px'}, 'slow');
			}
			// console.log(slideSize,wrap - sAbs);
	}

});

// slider2
$(function() {

	var $slider = $('.slider--2'),
	$prev = $('span:first-child'),
	$next = $('span:nth-child(2)'),

	wrap = $slider.width(),
	size = -300, // ここに動かしたい画像分widthを入れる
	int = parseInt(size),
	sAbs = Math.abs(int),
	left,
	mLeft,
	slideSize = Math.abs(mLeft);

	$prev.click(function() {
		$slider.animate({left: '+=' + sAbs + 'px'}, 'slow');
	});
	$next.click(function() {
		left = $slider.css('left');
		mLeft = Math.abs(left);

		if(mLeft >= wrap - sAbs) {
			$next.hide();
		} else {
			$slider.animate({left: '+=' + int + 'px'}, 'slow');
		}

	});

});
