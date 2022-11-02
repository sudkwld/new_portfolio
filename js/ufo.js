// ufo 위 아래로 움직이는 event
$(document).ready(function () {

  ufoMoving();

});

function ufoMoving() {
  $("#ufo")
    .animate({
      marginTop: "20px"
    }, 1000, "", function () {
      $("#ufo")
        .animate({
          marginTop: "0px"
        }, 1000, "", function () {

          ufoMoving();
        });
    });
}