jQuery(function($){
  //初めに表示されるインデックス番号を管理
  let index = 1;
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
          left: "-300" * index
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

  //ボタンイベント
  $("button").click(function(){
    //ページ数表示
    $('.js-page-current-number').text(index + 1);

    //サブ画像にアニメーションをつける
    $(".js-item").eq(index).addClass("active");
    $(".js-item").eq(index -1,index -2, index -3, index -4).removeClass("active");
    $(".js-item").eq(index +1,index +2, index +3, index +4).removeClass("active");
    
    //ミッキーマウスの形にする 
    $(".js-item.position1").addClass("position5");
    $(".js-item.position1;").removeClass("position1")
    $(".js-item.position2").addClass("position1");
    $(".js-item.position2").removeClass("position2");
    $(".js-item.position3").addClass("position2");
    $(".js-item.position3").removeClass("position3");
    $(".js-item.position4").addClass("position3");
    $(".js-item.position4").removeClass("position4");
    $(".js-item.position5").addClass("position4");
    $(".js-item.position5").removeClass("position5");





    // let mainpic = $(".js-item").hasClass('active');
    // let position1 = $(".js-item").hasClass('position1');
    // let position2 = $(".js-item").hasClass('position2');
    // let position3 = $(".js-item").hasClass('position3');
    // let position4 = $(".js-item").hasClass('position4');
    // let position5 = $(".js-item").hasClass('position5');
    // }
    // }else if(mainpic.eq(3)) {
    //   $(".js-item").toggleClass("position4");
    //   $(".js-item").removeClass("position1,position2,position3,position5");
    // }else if(mainpic.eq(4)) {
    //   $(".js-item").toggleClass("position5");
    //   $(".js-item").removeClass("position1,position2,position3,position4");
    // }

    // $(".js-item").eq(index).toggleClass("position1");
    // $(".js-item").eq(index +1).toggleClass("position2");
    // $(".js-item").eq(index +2).toggleClass("position3");
    // $(".js-item").eq(index +3).toggleClass("position4");
    // $(".js-item").eq(index +4).toggleClass("position5");

    // for(let i = 0; i < slideCount; i++ ) {
    //   $(".js-item").eq(i - 1).toggleClass('position2');
    //     $(".js-item").eq(i - 2).toggleClass('position3');
    //     $(".js-item").eq(i - 3).toggleClass('position4');
    //     $(".js-item").eq(i - 4).toggleClass('position5');
    //     $(".js-item").eq(i).toggleClass('position1');
    //     if (i >=  slideCount) i = 0;
      // $.when(
      //   $(".js-item").eq(i).removeClass('position'[i - 1])
      //   )
      //   .done(function() {
      //     $(".js-item").eq(i).toggleClass('position'[i]);
      //   });
    // }
  });

});