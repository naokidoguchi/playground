;(function (window){
    var int,
        timerArea,
        remainTime,
        timerId;

    function init() {
        timerArea = document.getElementById('js-timer');
        remainTime = timerArea.getAttribute('data-remaintime');
        int = parseInt(remainTime);
        timerArea.innerHTML = computeDuration();
        timerId = setInterval(setCountDown, 1000);     
    }

    function setCountDown() {
        int = int - 1;
        timerArea = document.getElementById('js-timer');
        timerArea.innerHTML = computeDuration();
        console.log(int > 0);
        if(int <= 0) {
            clearInterval(timerId);
            console.log('タイマー終わり');
        }
    }

    function computeDuration() {
        var  h, m, s;
        h = '' + (int / 36000 | 0) + (int / 3600 % 10 | 0);
        m = '' + (int % 3600 / 600 | 0) + (int % 3600 / 60 % 10 | 0);
        s = '' + (int % 60 / 10 | 0) + (int % 60 % 10); 
        return h + '時間' + m + '分' + s + '秒';
    }

    window.onload = function() {
        init();
    };

})(window);

//# sourceMappingURL=countdown.js.map