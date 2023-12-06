$(function () {

 
  //カルーセル
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    arrows: false,
  });

   // ボタンアニメーション
   $('.button-more').on('mouseover', function () {
      $(this).animate({
        opacity: 0.5
      }, 300);
    });

    $('.button-more').on('mouseout', function () {
      $(this).animate({
        opacity: 1.0
      }, 300);
    });

    //スクロールしたときにTOPに戻るボタンを表示させる
    var pagetop = $('#js-pagetop');
    pagetop.hide();
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        pagetop.fadeIn();
      } else {
        pagetop.fadeOut();
      }
    });
    pagetop.click(function () {
      $('body, html').animate({
          scrollTop: 0
      }, 500);
      return false;
    });

   
  // ページ内スクロール
  $('a[href^="#"]').click(function () {
    const speed = 600;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
});

$(window).scroll(function (){
  $('.fadein').each(function(){
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 200){
        $(this).addClass('active');
      }
  });
});


// $('div a').click(function() {
//   var imgSrc = $(this).children().attr('src');
//   $('.bigimg').children().attr('src', imgSrc);
//   $('.modal').fadeIn();
//   $('body,html').css('overflow-y', 'hidden');
//   return false
// });

// $('.close-btn').click(function() {
//   $('.modal').fadeOut();
//   $('body,html').css('overflow-y', 'visible');
//   return false
// });

});