jQuery(function($){
  //初めに表示されるインデックス番号を管理
  let index = 1;
  //コンテンツの数を取得
  let slideCount = $(".js-item").length;
  //position番号管理
  let pnumber = $(".js-item").children().data('number');
  Number(pnumber);
  console.log(pnumber);

  //初めのposition番号を管理
  if(pnumber == 1) {
    $(".js-item").addClass("position1");
    // console.log(pnumber);
  }else if(pnumber === 2) {
    $(".js-item").addClass("position2");
    // console.log(pnumber);
  }else if(pnumber === 3) {
    $(".js-item").addClass("position3");
    // console.log(pnumber);
  }else if(pnumber === 4) {
    $(".js-item").addClass("position4");
    // console.log(pnumber);
  }else if(pnumber === 5) {
    $(".js-item").addClass("position5");
    // console.log(pnumber);
  }

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
          left: "-300" * (index - 1 )
        },300);
  }

  function PositionNext(pnumber) {
    for(let i = 0; i < slideCount; i++) {
      pnumber ++;
      if(pnumber > slideCount) {
        pnumber = 1;
      }
    }
  }

  function PositionPrevious(pnumber) {
    for(let i = 0; i < slideCount; i--) {
      pnumber --;
      if(pnumber < 0) {
        pnumber = slideCount;
      }
    }
  }

  //「前へ」ボタンをクリックした時の処理
  $(".js-SliderPrevButton").click(function (pnumber) {
    //現在のコンテンツ番号から1を引く
    index--;
    sliding();
    // PositionPrevious();
  });

  //「次へ」ボタンをクリックした時の処理
  $(".js-SliderNextButon").click(function (pnumber) {
    //現在のインデックス番号に1を足す
    index++;
    sliding();
    PositionNext();
  });

  //ボタンイベント
  $("button").click(function(){
    //ページ数表示
    $('.js-page-current-number').text(index + 1);

    //サブ画像にアニメーションをつける
    $(".js-item").eq(index).addClass("active");
    $(".js-item").eq(index -1,index -2, index -3, index -4).removeClass("active");
    $(".js-item").eq(index +1,index +2, index +3, index +4).removeClass("active");
  });

});