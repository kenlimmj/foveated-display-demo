'use strict';

(function () {
  var width = window.innerWidth;
  var height = window.innerHeight;

  var paper = Snap(width, height);
  var gradient = paper.gradient('r()#fff-#000');

  var img = {
    '16x': paper.image('dist/img/chapel16x.jpg', 0, 0, width, height),
    '8x': paper.image('dist/img/chapel8x.jpg', 0, 0, width, height),
    '4x': paper.image('dist/img/chapel4x.jpg', 0, 0, width, height),
    '2x': paper.image('dist/img/chapel2x.jpg', 0, 0, width, height),
    '1x': paper.image('dist/img/chapel1x.jpg', 0, 0, width, height)
  };

  var mask = {
    '8x': paper.circle(width / 2, height / 2, 800),
    '4x': paper.circle(width / 2, height / 2, 400),
    '2x': paper.circle(width / 2, height / 2, 200),
    '1x': paper.circle(width / 2, height / 2, 100)
  };

  Object.keys(mask).forEach(function (item) {
    mask[item].attr({
      fill: gradient
    });

    img[item].attr({
      mask: mask[item]
    });
  });

  var redrawMasks = function redrawMasks(e) {
    Object.keys(mask).forEach(function (item) {
      mask[item].attr({
        cx: e.clientX,
        cy: e.clientY
      });
    });
  };

  paper.mousemove(redrawMasks);
})();
//# sourceMappingURL=app.js.map