

function registration_validation() {
    
    var fname =  document.forms["RegForm"]["firt_name"];
    var lname =  document.forms["RegForm"]["last_name"];
    var email = document.forms["RegForm"]["email"];    
    var password = document.forms["RegForm"]["Password"];
    var confirm_password = document.forms["RegForm"]["confirm_password"];

    if (name.value == "") {
        window.alert("Please enter your name.");
        name.focus();
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

    if (password.value == "") {
        window.alert("Please enter your password");
        password.focus();
        return false;
    }  

    return true;
}