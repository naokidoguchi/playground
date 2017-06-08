function calculate() {
  'use strict';
  var total;

  var quantity = document.getElementById('quantity').value;
  var price = document.getElementById('price').value;
  var tax = document.getElementById('tax').value;
  var discount = document.getElementById('discount').value;

  // 合計金額の計算
  total = quantity * price;
  // 税率の計算
  tax /= 100;
  tax++;
  total *= tax;
  // 値引き額の計算
  total -= discount;

  document.getElementById('total').value = total;

  return false;
  
}

function init() {
  'use strict';
    var theForm = document.getElementById('theForm');
    // theFormの計算ボタンを押したタイミングで関数実行
    theForm.onsubmit = calculate;
}

window.onload = init;

/*
  *** Mathオブジェクトの主なメソッド一覧 ***

  abs() 　　　数の絶対値を返す
  ceil()     小数点以下の値を切り上げる
  floor()    小数点以下の値を切り捨てる
  max()      引数に指定された中で最大の値を返す
  min()      引数に指定された中で最小の値を返す
  pow()      数の累乗を返す
  round()    小数点以下の値を四捨五入した整数を返す
  random()   0以上1未満の擬似乱数を返す

*/