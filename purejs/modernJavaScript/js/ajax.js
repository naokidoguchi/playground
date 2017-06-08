// 結果ハンドラの特定 関数をAjax呼び出しに関連付ける
ajax.onreadystatechange = handleStateChange;

ajax.open('GET', 'http://www.example.com/page.php', true); 