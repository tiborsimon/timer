'use strict';
function loaderDone(event) {
  var loader = document.getElementById("loader");
  loader.style.opacity = 0;
  setTimeout(function(){
    var wrapper = document.getElementById("wrapper");
    wrapper.style.marginTop = 0;
    wrapper.style.opacity = 1;
    setTimeout(function(){
      loader.style.display = "none";
    }, 800);
  }, 300);
}
setTimeout(function() {
  if(document.readyState === 'complete') {
    loaderDone();
  }
}, 100);
