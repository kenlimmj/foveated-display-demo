(() => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const paper = Snap(width, height);

  const gradient = paper.gradient('r()#fff-#000');

  let img = {
    '16x': paper.image('dist/img/chapel16x.jpg', 0, 0, width, height),
    '8x': paper.image('dist/img/chapel8x.jpg', 0, 0, width, height),
    '4x': paper.image('dist/img/chapel4x.jpg', 0, 0, width, height),
    '2x': paper.image('dist/img/chapel2x.jpg', 0, 0, width, height),
    '1x': paper.image('dist/img/chapel1x.jpg', 0, 0, width, height),
  };

  let mask = {
    '8x': paper.circle(width / 2, height / 2, 800),
    '4x': paper.circle(width / 2, height / 2, 400),
    '2x': paper.circle(width / 2, height / 2, 200),
    '1x': paper.circle(width / 2, height / 2, 100),
  };

  Object.keys(mask)
    .forEach((item) => {
      mask[item].attr({
        fill: gradient,
      });

      img[item].attr({
        mask: mask[item],
      });
    });

  window.addEventListener('mousemove', (e) => {
    Object.keys(mask)
      .forEach((item) => {
        mask[item].attr({
          cx: e.clientX,
          cy: e.clientY,
        });
      });
  });
})();
