$(document).ready(function() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            document.getElementById("logout_div").style.display = "block";
            //document.getElementById("login_div").style.display = "none";
            document.getElementById("signup_div").style.display = "none"
            var user = firebase.auth().currentUser;
            if (user != null) {
                var userEmail = user.email;
                document.getElementById('user_param').innerHTML = "User " + userEmail
            }
        } else {
            // No user is signed in.
            document.getElementById("logout_div").style.display = "none";
            // // document.getElementById("login_div").style.display = "block";
            document.getElementById("signup_div").style.display = "block"
        }
    });
    console.log("calls")
    $('button#submit').click(function() {
        console.log('works  ')
        var userEmail = document.getElementById('usr_email').value;
        var userPassword = document.getElementById('password1').value;
        var userConfpassword = document.getElementById('password2').value;
        // alert(userEmail)
        if (userPassword === userConfpassword) {
            //  alert(userEmail)
            // userPassword='edgar.kibet@moringaschool.com'
            // window.alert(userEmail +" "+userPassword+" "+userConfpassword)
            firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
                window.alert('Error: ' + errorMessage)
            });
        } else {
            window.alert("Email or password not correct")
        }
    })
});