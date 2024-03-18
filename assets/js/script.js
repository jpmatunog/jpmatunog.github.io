$(document).ready(function() {
  animateBackground();
});

function animateBackground() {
  $('.sliding-background').animate({backgroundPositionX: "100%"}, 20000, "linear", function() {
    $(this).css("background-position-x", "0%");
    animateBackground();
  });
}
