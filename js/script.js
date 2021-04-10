function validate(){
    var email = document.getElementById("email").value;
    if(email == ""){
      alert("Please enter your email");
    }else{
		window.location.href = "success.html";
	}
}

function details(elem) {
  var title=$(elem).parents('.card').children(1).children('.product-description').data('name');
  window.location.href = "bookDetails.html?title="+title;
}

function descDetails(elem) {
  console.log(1);
  debugger;
  var title=$(elem).siblings('.product-description').data('name');
  window.location.href = "bookDetails.html?title="+title;
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
