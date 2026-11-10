(function () {
  var slides = [].slice.call(document.querySelectorAll('.slide')),
      thumbs = [].slice.call(document.querySelectorAll('#thumbs button')),
      i = 0, timer;

  function go(n) {
    i = (n + slides.length) % slides.length;
    slides.forEach(function (s, k) { s.classList.toggle('on', k === i); });
    thumbs.forEach(function (t, k) { t.classList.toggle('on', k === i); });
  }

  function auto() {
    clearInterval(timer);
    timer = setInterval(function () { go(i + 1); }, 6000);
  }

  document.getElementById('prev').onclick = function () { go(i - 1); auto(); };
  document.getElementById('next').onclick = function () { go(i + 1); auto(); };
  thumbs.forEach(function (t, k) { t.onclick = function () { go(k); auto(); }; });

  var nav = document.getElementById('nav'),
      mb = document.getElementById('menuBtn');
  mb.onclick = function () {
    var o = nav.classList.toggle('open');
    mb.setAttribute('aria-expanded', o);
  };

  go(0);
  auto();
})();