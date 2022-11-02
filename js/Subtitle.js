//첫 화면 좌측상단 mouseenter시 글씨보이는 event
$(function () {
    $("#subtitle > div > i").mouseenter(function () {
        $("#subtitle > div > i > span").stop().hide();
        $(this).find("span").stop().fadeIn();
        $(this).css({
            color: "#fff"
        });
    }).mouseleave(function () {
        $("#subtitle > div > i > span").stop().hide();
        $(this).css({
            color: "#000"
        });
    });
});