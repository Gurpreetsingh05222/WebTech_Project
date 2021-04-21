$(document).ready(function(){
  
  $("#login").click(function(){
    var emailRegex = /\b[A-Za-z0-9]+[.]{0,1}[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]{2,4}\b/;
    var email = $("#email").val();
    var password = $("#password").val();
    if(!emailRegex.test(email) || password.length<8){
      $("#error-dialog").css("display","block");
    }
  });
});
