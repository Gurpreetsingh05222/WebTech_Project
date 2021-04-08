$(document).ready(function(){
  $(".aboutus-content").slideDown(2000);
  $('.aboutus-content img').css('display', 'block');
  $('.aboutus-content img').animate({
    display: "block",
    width: "50%",
    opacity: 1
  }, 1000);
  $("#date").text((new Date).getFullYear());
});
