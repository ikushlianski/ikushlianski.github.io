document.body.onload = function() {
  setTimeout(function(){
    var preloader = document.getElementsByClassName('preloader')[0];
    if (!preloader.classList.contains('faded')) {
      preloader.classList.add('faded');
    }
  }, 1000)
}
