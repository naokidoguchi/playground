(function(window) {
  'use strict';

  var URL = './json/wp5_posts.json';

  function init() {
      requestStart();
  }

  function requestStart() {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", URL);
      xhr.responseType = 'json'
      xhr.send();

      xhr.onreadystatechange = function() {
          if(xhr.readyState === 4) {
              if(xhr.status === 200) {
                render(xhr.response);
            } else {
                document.write('エラー' + xhr.status);
            }
          }
        //   else if(xhr.readyState === 3) {
        //     document.write('受信中....');
        //   }
      }
    }
     
     function render(json) {
         document.getElementById('post_title').textContent = json.post_title;
         document.getElementById('post_date').textContent = json.post_date;
         document.getElementById('post_content').textContent = json.post_content;
     }

     window.addEventListener('DOMContentLoaded', function() {
         init();
     });

})(window);