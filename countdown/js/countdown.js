;(function (window){
    var int,
        test,
        remainTime,
        timerId;

function init() {
    test = document.getElementById('js-timer');
    remainTime = test.getAttribute('data-remaintime');
    int = parseInt(remainTime);
    test.innerHTML = int;
    timerId = setInterval(setCountDown, 1000);     
}

function setCountDown() {
    int = int - 1000;
    test = document.getElementById('js-timer');
    test.innerHTML = int;
    console.log(int > 0);
    if(int <= 0) {
        clearInterval(timerId);
    }
}

window.onload = function() {
    init();
};

})(window);

//# sourceMappingURL=countdown.js.map