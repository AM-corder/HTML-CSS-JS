//=== SPハンバーガーメニュー ===//
$(".menu__openbtn").click( function() {
  $(this).toggleClass('active');   // ボタンを×に表示切替用
  $('header .menu__list').toggleClass('active'); // メニューを表示させる用
  $('body').toggleClass('nav--active'); // メニュー展開中はスクロール禁止用
});
