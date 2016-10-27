;(function (window){
    var int,
        test,
        remainTime,
        timerId;

function init() {
    test = document.getElementById('js-timer');
    remainTime = test.getAttribute('data-remaintime');
    int = parseInt(remainTime);
    test.innerHTML = computeDuration();
    timerId = setInterval(setCountDown, 1000);     
}

function setCountDown() {
    int = int - 1;
    test = document.getElementById('js-timer');
    test.innerHTML = computeDuration();
    console.log(int > 0);
    if(int <= 0) {
        clearInterval(timerId);
    }
}

function computeDuration() {
    var  h, m, s;
    h = '' + (int / 36000 | 0) + (int / 3600 % 10 | 0);
    m = '' + (int % 3600 / 600 | 0) + (int % 3600 / 60 % 10 | 0);
    s = '' + (int % 60 / 10 | 0) + (int % 60 % 10); 
    return h + ':' + m + ':' + s;
}

window.onload = function() {
    init();
};

})(window);

//# sourceMappingURL=countdown.js.map