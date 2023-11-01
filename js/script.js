jQuery(function($){ 
    $('html').removeClass('nojs')
    $('html').addClass('hasjs')
});

function formConfirmation() {

    let x = document.getElementById("email").value;

    if (x.includes ("@")) {
        alert("Valid Email")
    }

    else {
        alert("Invalid Email")
    }

    alert("Thank you for your time. A link should be sent to your E-Mail for you to download Hollow Knight: Silksong. \n\nEnjoy!");
}