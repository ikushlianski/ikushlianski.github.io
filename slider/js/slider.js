var allimages = $("li.image"), i = allimages.length-1;
var sliderTimeout = 5000;
// можно вообще чтобы никто не fade out по очереди а просто все наслаивались на одну фотку
$(".next").on("click", function(){
  clearInterval(defaultInterval);
  defaultInterval = setTimeout(function() {
    slideShowTimer();
  }, sliderTimeout);
  if (i > 0) {
    //$("li.image").eq(i).fadeOut(500);
    $("li.image").eq(i).fadeOut(500);
    i--;
  } else {
    $("li.image").fadeIn(500);
    i = allimages.length-1;
  }
});
$(".prev").on("click", function(){
  clearInterval(defaultInterval);
  defaultInterval = setTimeout(function() {
    slideShowTimer();
  }, sliderTimeout);
  if (i < allimages.length-1) {
    // $("li.image").eq(i).fadeOut(500);
    i++;
    $("li.image").eq(i).fadeIn(500);
  } else {
    for (let le = allimages.length; le > 1; le--) {
      if (le == allimages.length ) {
        $("li.image").eq(le-1).fadeOut(500);
      } else {
        $("li.image").eq(le-1).hide();
      }
    }
    i = 0;
    // $("li.image").eq(i).fadeIn(500);
  }
});
function slideShowTimer(){
  $(".next").trigger("click");
}
var defaultInterval = setInterval(function() {
  slideShowTimer();
}, sliderTimeout);
