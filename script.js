var DOWNLOAD_URL = "#";

var dl = document.getElementById("download-link");
dl.setAttribute("href", DOWNLOAD_URL);
dl.addEventListener("click", function (e) {
  if (DOWNLOAD_URL === "#") {
    e.preventDefault();
    alert("Download coming soon!");
  }
});

var revealItems = document.querySelectorAll(".card, .info-row");

if ("IntersectionObserver" in window) {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach(function (el, i) {
    if (el.classList.contains("info-row")) {
      el.style.transitionDelay = (i % 12) * 0.06 + "s";
    }
    observer.observe(el);
  });
} else {
  revealItems.forEach(function (el) { el.classList.add("visible"); });
}
