$(function () {
  $("#menu > ul > li").mouseenter(function(){         
      $(this).children("span").stop().show();
  }).mouseleave(function(){
      $(this).children("span").stop().hide();
  });
});