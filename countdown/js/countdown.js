;(function (window){

function setCountDown(remainTime, test) {
    var nowTime,
        _remain,
        endTime;
            
    console.log(test);  
    test.innerText = remainTime;
    
    var timerId = setTimeout(countDown, 500);
    function countdown() {
        remainTime = remainTime - 1000;
        test.innerText = remainTime;
        timerId = setTimeout(countDown, 500);
    } 
}

function countDown(remainTime) {
}

function init() {
    var test,
        remainTime;

    test = document.getElementById('js-timer');
    remainTime = test.getAttribute('data-remaintime');
    setCountDown(remainTime,test);
    console.log(remainTime, test);
    
}
window.onload = function() {
    init();
};

})(window);

// ;(function init() {
//     var timerset = 60000,
//         elem =  ;
// });

// init();

//# sourceMappingURL=countdown.js.map