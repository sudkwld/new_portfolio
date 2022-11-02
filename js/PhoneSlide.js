$(function () {
  $(".section_main").mouseover(function () {
    var img_height = $(this).children("img").height();
    var section_main_height = $(this).height();

    $(this).children("img").stop().animate({
      marginTop: -img_height + section_main_height
    }, 12000);
  }).mouseout(function () {
    $(this).children("img").stop().animate({
      marginTop: 0
    }, 1000);
  });

  // 핸드폰 이미지 슬라이드
  var section_phone_height = $(".section_phone").height();
  var section_phone_height_plus1 = 0;
  var section_phone_height_plus2 = 0;

  function phone_slide() {

    if ($(".section_mini:first").children("img").height() % section_phone_height < section_phone_height) {
      section_phone_height_plus1 += $(".section_mini:first").children("img").height() % section_phone_height
    } else {
      section_phone_height_plus1 += $(".section_mini").height();
    };

    if ($(".section_mini:last").children("img").height() % section_phone_height < section_phone_height) {
      section_phone_height_plus2 += $(".section_mini:first").children("img").height() % section_phone_height
    } else {
      section_phone_height_plus2 += $(".section_mini").height();
    };


    if (section_phone_height_plus1 >= $(".section_mini:first").children("img").height() - section_phone_height) {
      section_phone_height_plus1 = 0;
    }
    if (section_phone_height_plus2 >= $(".section_mini:last").children("img").height() - section_phone_height) {
      section_phone_height_plus2 = 0;
    }

    $(".section_mini:first").children("img").animate({
      marginTop: -section_phone_height_plus1
    }, 700);
    $(".section_mini:last").children("img").animate({
      marginTop: -section_phone_height_plus2
    }, 1000);
  }


  setInterval(phone_slide, 3000);
});