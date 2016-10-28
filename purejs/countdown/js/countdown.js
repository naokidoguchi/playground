;(function (window){
    var int,
        timerArea,
        remainTime,
        timerId;
        // 変数は最小限に。

    function init() {
        timerArea = document.getElementById('js-timer');
        remainTime = timerArea.getAttribute('data-remaintime');
        // remainTime = Number(timerArea.getAttribute('data-remaintime'));
        int = parseInt(remainTime);
        // ここで新たに変数を作るのはやめよう。remainTimeで上書きが美しい。
        render(computeDuration());
        timerId = setInterval(setCountDown, 1000);  
    }

    function setCountDown() {
        int = int - 1;
        render(computeDuration());
        console.log(int > 0);
        if(int <= 0) {
            clearInterval(timerId);
            console.log('タイマー終わり');
        }
    }

    function render(text) {
        timerArea.innerHTML = text;
    }
    // 描画させる系はrender関数で引数を利用すると良い

    function computeDuration() {
        var  h, m, s;
        h = '' + (int / 36000 | 0) + (int / 3600 % 10 | 0);
        m = '' + (int % 3600 / 600 | 0) + (int % 3600 / 60 % 10 | 0);
        s = '' + (int % 60 / 10 | 0) + (int % 60 % 10); 
        // |は少数をカットするらしい。
        return h + '時間' + m + '分' + s + '秒';
    }

    addEventListener('DOMContentLoaded', function() {
        init();
    });
    // addEventListenerのDOMContentLoadedを使えばonloadよりも読み込みが早い

})(window);

//# sourceMappingURL=countdown.js.map