
$(document).ready(function() {

    // move focus to first text box

   
    // the handler for the click event of a submit button
    var ErrArr = [];
    $("#submit").click(

        function(event) {
            event.preventDefault();
            var isValid = false;

            // validate the email entry with a regular expression

            var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

            var email = $("#email").val().trim();

            if (email == "") {
               ErrArr.push("The email field is required.");
                $("#email").next().text("This field is required.");

                isValid = false;

            } else if ( !emailPattern.test(email) ) {
                 
                ErrArr.push("Must be a valid email address..");
               
                isValid = false;

            } else {

                $("#email").next().text("");

            }

            $("#email").val(email);

            // validate the second email entry

            var email2 = $("#email1").val().trim();

            if (email2 == "") {

                ErrArr.push("Confrm your email field is required.");

                isValid = false;

            } else if (email !== email2 ) {

                ErrArr.push("Email 2 Must equal first email entry.");

                isValid = false;

            } else {

                $("#email1").next().text("");

            }

            $("#email2").val(email2);

            // validate the first name entry

            if ($("#first_name").val() == "") {

                ErrArr.push("Please enter your firstname, this field is required.");               

                isValid = false;

            } else {

                $("#first_name").next().text("");

            }

            // validate the last name entry

            var lastName = $("#last_name").val().trim();

            if (lastName == "") {

                ErrArr.push("Please enter your lastname, this field is required.");                

                isValid = false;

            } else {

                $("#last_name").next().text("");

            }

            $("#last_name").val(lastName);

                   
            var password = $('#password1').val();
           
            var confirm_password = $('#confirm_password').val();

            if(password.length < 6)
            {
                ErrArr.push("Your Password must be greater than 5")
            }
            
            if(password == "")
            {
                ErrArr.push("Your Password cannot be empty")
            }
            
            if(password != confirm_password)
            {
                ErrArr.push("Your passwords do not match </b>")
            }
            
            if (isValid == false) {

            }

            if(ErrArr.length > 0) {

                alert(ErrArr.join("\n"));

                ErrArr = [];

                return false;
              }
              else{
               
                $(location).attr('href','login.html');

              }

        } // end function

    );  // end submit

    //Login Validation

    $('#login').click(
        function(event){
            event.preventDefault();
            var password = $('#password').val();
            var email = $('#email').val();

            if(password !=='admin' && email !== 'admin@outlook.com')
            {
                alert("Invalid username or password")
            }
            else
            {
                sessionStorage.setItem("email", email);
                $(location).attr('href','index.html');
            }       
         }
    );
    
}); // end ready

//redirect user to login page if they are not logged in
function isLoggedIn()
{
   
  if(sessionStorage.getItem("email")==null)
  {
    window.location.href="login.html";
  }
}
/*
function registration_validation() {
    
    var fname =  document.forms["RegForm"]["firt_name"];
    var lname =  document.forms["RegForm"]["last_name"];
    var email = document.forms["RegForm"]["email"];    
    var password = document.forms["RegForm"]["Password"];
    var confirm_password = document.forms["RegForm"]["confirm_password"];

    if (fname.value == "") {
        window.alert("Please enter your firstname name.");
        fname.focus();
        return false;
    }
    
    if (lname.value == "") {
        window.alert("Please enter your lastname name.");
        fname.focus();
        return false;
    }
    
    if (email.value == "") {
        window.alert(
          "Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

if (phone.value == "") {
        window.alert(
          "Please enter your telephone number.");
        phone.focus();
        return false;
    }
    
    if (password1.value == "") {
        window.alert("Please enter your password");
        password.focus();
        return false;
    }  
   
    if (password1 != confirm_password) {
        window.alert("Your Password do not match");
        confirm_password.focus();
        return false;
    } 

    return true;
}*/