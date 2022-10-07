jQuery(function($){
  //現在のコンテンツ番号を管理
  let index = 0;
  //コンテンツの数を取得
  let slideCount = $(".js-item").length;

  //目的のコンテンツまでスライドする関数
  function sliding() {
    //現在のインデックス番号が0より小さいかチェック
    if (index < 0) {
      //コンテンツ番号をコンテンツ数から1引いた値にする。
      index = slideCount - 1;
    }

    //インデックス番号がコンテンツ数以上かチェック
    if (index > slideCount - 1) {
      //コンテンツ番号を0にする
      index = 0;
    }

    //leftの値をアニメーションで変更
    $(".js-slider").stop().animate({
          left: "-500" * index
        },300);
  }

  //「前へ」ボタンをクリックした時の処理
  $(".js-SliderPrevButton").click(function () {
    //現在のコンテンツ番号から1を引く
    index--;
    sliding();
  });

  //「次へ」ボタンをクリックした時の処理
  $(".js-SliderNextButon").click(function () {
    //現在のコンテン番号に1を足す
    index++;
    sliding();
  });

  //ページ数表示
  $("button").click(function(){
    $('.js-page-current-number').text(index + 1);
  });


  function animation() {
    $("button").click(function() {
      if("img" != index) {
        $(".js-item").eq(index).css('opacity','0.4');
        $(".js-item").eq(index).css('transform','scale(0.43)');
      } else {
        $(".js-item").eq(index).css('opacity','1');
        $(".js-item").eq(index).css('transform','initial');
      }
     });
  }
  animation();
});