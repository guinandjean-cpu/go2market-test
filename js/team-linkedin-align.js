(function () {
  var card = document.querySelector('.team-card--linkedin');
  var grid = document.querySelector('.team-grid');
  if (!card || !grid) return;

  function sync() {
    var cards = grid.querySelectorAll('.team-card');
    if (!cards.length) return;

    var firstTop = cards[0].getBoundingClientRect().top;
    var left = Infinity;
    var right = -Infinity;

    cards.forEach(function (c) {
      var rect = c.getBoundingClientRect();
      if (Math.abs(rect.top - firstTop) < 1) {
        left = Math.min(left, rect.left);
        right = Math.max(right, rect.right);
      }
    });

    if (right > left) {
      card.style.width = (right - left) + 'px';
    }
  }

  sync();
  window.addEventListener('resize', sync);
  window.addEventListener('load', sync);

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(sync);
  }
})();
