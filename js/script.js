// Newsletter Email Validation
function validate(){
  var email = document.getElementById("email").value;
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  
  var result = emailReg.test(email);
  if(email == ""){
    alert("Email cannot be empty");
  }else if(!result){
    alert("Please enter valid email");
  }
  else{
    window.location.href = "success.html";
  }
}
  
// $(".slider-one")
// .not(".slick-initialized")
// .slick({
// 	prevArrow:".site-slider.prev",
// 	nextArrow: ".site-slider.next",
// 	slidesToShow: 5,
// 	slidesToScroll: 1,
// 	autoplaySpeed: 2000
// });