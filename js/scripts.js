$(document).ready(function() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            document.getElementById("logout_div").style.display = "block";
            document.getElementById("login_div").style.display = "none";
            var user = firebase.auth().currentUser;
            if (user != null) {
                var userEmail = user.email;
                document.getElementById('user_param').innerHTML = "User " + userEmail
            }
        } else {
            // No user is signed in.
            document.getElementById("logout_div").style.display = "none";
            document.getElementById("login_div").style.display = "block";
        }
    });

    function login() {
        var userEmail = document.getElementById('email_field').value;
        var userPassword = document.getElementById('password_field').value;
        if (email_field === usr_email)
            var user = firebase.auth().currentUser;

        user.sendEmailVerification().then(function() {
            // Email sent.
        }).catch(function(error) {
            // An error happened.
        });
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            window.alert('Error: ' + errorMessage)
            window.location.href = 'http://127.0.0.1:5501/nasra.html';
        });

    };
})