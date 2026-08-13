
var DOWNLOAD_URL = "#";

var dl = document.getElementById("download-link");
dl.setAttribute("href", DOWNLOAD_URL);
dl.addEventListener("click", function (e) {
  if (DOWNLOAD_URL === "#") {
    e.preventDefault();
    alert("Download coming soon!");
  }
});
