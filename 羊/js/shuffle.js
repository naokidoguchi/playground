(function(window) {
  'use strict'

  function init() {
    photoSet();
  };

  function photoSet() {
    var sheepImg = [
          { src: 'img/image1.jpg' },
          { src: 'img/image2.jpg' },
          { src: 'img/image3.jpg' }
        ]
    var element = document.createElement('img');

    Object.keys(sheepImg).forEach(function (i) {
      element.src = sheepImg[i].src;
      element.style.position = 'absolute';
      document.getElementById('photo').appendChild(element);
    });

    // function shuffle() {
      
        var index = 0;
        setInterval(function() {
          if(index >= sheepImg.length) {
            index = 0;
          } else {
              index++;
              console.log(index);
              
          }
        },1000);
    };
    
  // }

  window.addEventListener('DOMContentLoaded', function() {
    init();
  }); 
})(window);