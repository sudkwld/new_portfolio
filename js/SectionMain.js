//돋보기 아이콘 mouseenter/mouseleave event
$(function () {
  $(".section_main").mouseenter(function () {
      $(this).find("a").stop().fadeIn();
  }).mouseleave(function () {
      $(this).find("a").stop().fadeOut();
  });
});