// Scroll-reveal for case-study sections
(function () {
  var els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("in"); }); return; }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
  els.forEach(function (e) { io.observe(e); });
})();

// Scale the fixed 1600px case-study canvas to fit narrow screens
(function () {
  var cs = document.querySelector(".cs");
  function fit() {
    var w = document.documentElement.clientWidth;
    if (w >= 1660) { cs.style.transform = ""; cs.style.height = ""; return; }
    if (w <= 900) { cs.style.transform = ""; cs.style.height = ""; return; } // mobile uses responsive CSS
    var scale = w / 1600;
    cs.style.transform = "scale(" + scale + ")";
    cs.style.transformOrigin = "top left";
    cs.style.height = cs.getBoundingClientRect().height + "px";
  }
  window.addEventListener("resize", fit);
  fit();
})();
