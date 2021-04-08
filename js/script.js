function validate(){
    var email = document.getElementById("email").value;
    if(email == ""){
      alert("Please enter your email");
    }else{
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
