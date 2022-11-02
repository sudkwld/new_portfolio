$(function () {
  $(document).ready(function () {
    wordflick(); //워드 타이핑 event
    scatterPrint(); //별 반짝 event
  });
  
  function scatterPrint() {
    var i;
    for (i = 1600; i > 0; i--) {
      var filter = getRandom(0, 1);
      var star = document.createElement('div');
      if (filter >= 0.9) {
        star.className = "sgstar";
        star.style["animation-duration"] = concat(getRandom(.5, 2), "s");
      }
      star.style.margin = concat(getRandom(0.25, 2.5), "vmin")
      document.getElementById('scattergrid').appendChild(star);
    }

  }

  function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }

  function concat(arg1, arg2) {
    return arg1 + arg2;
  }
  var words = ['I AM WEB DEVELOPER'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 130;

  var wordflick = function () {
    setInterval(function () {
      if (forwards) {
        if (offset >= words[i].length) {
          ++skip_count;
          if (skip_count == skip_delay) {
            forwards = false;
            skip_count = 0;
          }
        }
      } else {
        if (offset == 0) {
          forwards = true;
          i++;
          offset = 0;
          if (i >= len) {
            i = 0;
          }
        }
      }
      part = words[i].substr(0, offset);

      if (skip_count == 0) {
        if (forwards) {
          offset++;
        } else {
          offset--;
        }
      }
      $('.word').text(part);
    }, speed);
  };
});