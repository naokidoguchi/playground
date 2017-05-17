(function(window) {
  'use strict';

  function init() {
    requestThread();
  };

  function requestThread() {
    var xhr = new XMLHttpRequest();
    

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4/* complete */) {
        if (xhr.status === 200/* OK */) {
          render(xhr.response);
        } else {
          console.log('エラー: ' + (xhr.status === 0 ?  '初期化されてません' :  '不明なエラーです'));
        }
      }
    };

    var url = './dummy.json';
    xhr.open("GET", url);
    xhr.responseType = 'json';
    xhr.send();
  };

  function email(email) {
    document.getElementById('email').setAttribute('href','mailto:' + email);
  }
 
  function render(json) {
    document.getElementById('name').textContent = json.name;
    document.getElementById('gender').textContent = json.gender;
    document.getElementById('company').textContent = json.company;
    document.getElementById('email').textContent = json.email;
    email(json.email);
    // for(var key = 0; key < json.friends.length; key++) {
    // forEachで回してみる
    Object.keys(json.friends).forEach(function (key){
      var element = document.createElement('div');
      element.textContent = 'リスト' + Number(json.friends[key].id + 1) + ' : ' + json.friends[key].name;
      document.getElementById('friend').appendChild(element);
    });
    // }
  }

  window.addEventListener('DOMContentLoaded', function() {
    init();
  });

})(window);