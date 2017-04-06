//グローバルになってしまう
// var hoge = 'aaa';

//ローカルスコープに閉じ込める
//windowは親オブジェクト(windowの中にsetTimeoutとか入ってる)
// (function(window) {

    // var hoge = 'aaa';
    //混在してしまうので使っちゃいけない
    // window.hoge = 'aaa';

    //windowを親に置いているので、window.を省略できる
    // setInterval();

    //gccではGcard中にいろんなものが登録されている
    // console.log(window.Gcard());

// })(window);

//function自体を()で囲む、最後によびだす
// (function(){})();

//即時関数
(function(window){
    //エラーを弾いてくれる(エラーを発見してくれる)jqueryでも使える
    'use strict';
    
    //通常ここに書くと読みやすい
    var URL = '';

    //init最初に一回行う
    function init() {
        requestStart();
    }

    function requestStart() {
        //windowのオブジェクトにXMLHttpRequestがある
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            //readyStateは今の状態
            if(xhr.readyState === 4) {
                //成功した場合は200が来る(それ以外は失敗)
                if(xhr.status === 200) {
                    //成功
                    render(xhr.response);
                } else {
                    //失敗
                    console.log('エラーステータス:' + xhr.status);
                }
            }
        }

        //gccだとここは_gc_send_presentとか
        var url = './json/data.json';
        //get=>取得するのみ　post=>データベースを更新とか
        xhr.open("GET", url);
        //textとかも取得できる
        xhr.responseType = 'json';
        xhr.send();
    }

    function render(json) {
        document.getElementById('name').textContent = json.enemy.name;
        document.getElementById('attack').textContent = json.enemy.attack;
        document.getElementById('defense').textContent = json.enemy.defense;
        document.getElementById('hp').textContent = json.enemy.hp;
    }

    window.addEventListener('DOMContentLoaded', function() {
        init();
    });

    //型の調べ方
    console.log(typeof xhr);

})(window);
