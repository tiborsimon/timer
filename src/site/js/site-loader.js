'use strict';
function loaderDone(event) {
  document.getElementById("loader").style.opacity = 0;
  setTimeout(function(){
    document.getElementById("timer-wrapper").style.marginTop = 0;
    var loaderDiv = document.getElementById("page-loader");
    loaderDiv.style.opacity = 0;
    setTimeout(function(){
      loaderDiv.style.display = "none";
    }, 800);
  }, 300);
}
var interval = setInterval(function() {
  if(document.readyState === 'complete') {
    clearInterval(interval);
    loaderDone();
  }
}, 100);
