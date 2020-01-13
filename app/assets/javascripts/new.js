$(function() {
  $('formation').change(function() {
    //セレクタの値が変更された時の処理
 
    //選択したvalue値を変数に格納
    var val = $(this).val();
 
    //選択したvalue値をp要素に出力
    $('.form_menber').text(val);
  });
});