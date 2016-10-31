;(function(window) {
    var imgList,
        img,
        move,
        x,
        prev,
        next;

    function init() {
        imgList = document.getElementById('js-slider');
        img = new Image();
        prev = document.getElementById('prev');
        next = document.getElementById('next');
        slide();
    }

    function slide() {
        prev.onclick = function() {
            calculation(500);
        };
        next.onclick = function() {
            calculation(-500);
        }
    }

    function calculation(move) {
        x += move;
        img.style.left = x + 'px';

    }

    addEventListener('DOMContentLoaded', function() {
        init();
    });

})(window);