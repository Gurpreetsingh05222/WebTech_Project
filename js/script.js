$(document).ready(function() {
  $("#date").text((new Date).getFullYear());
});

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

function details(elem) {
  setBooksObject();
  var title=$(elem).parents('.card').children(1).children('.product-description').data('name');
  window.location.href = "bookDetails.html?title="+title;
}

function descDetails(elem) {
  setBooksObject();
  var title=$(elem).siblings('.product-description').data('name');
  window.location.href = "bookDetails.html?title="+title;
}

function setBooksObject() {
  var cart = sessionStorage.getItem("Books");
  var cartItems = [];
  if(cart == null || cart.length == 0) {
    $(".product-description").each(function() {
      var name = $(this).data("name");
      var src = $(this).data( "src" );
      var desc = $(this).data("desc");
      var price = $(this).data("price");
      var cartObject = {
        name: name,
        src: src,
        desc: desc,
        price: price
      }
      cartItems.push(cartObject);
    });
    sessionStorage.setItem("Books", JSON.stringify(cartItems));
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