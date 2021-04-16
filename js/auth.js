

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

    /*if (phone.value == "") {
        window.alert(
          "Please enter your telephone number.");
        phone.focus();
        return false;
    }
    */
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
}