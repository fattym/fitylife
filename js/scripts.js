$(document).ready(function() {

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            location.href = 'http://127.0.0.1:5500/img/try.html'

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
            location.href = 'http://127.0.0.1:5500/fitylifenasra/signup.html'

        }
    });
    $('#submit').click(function() {


        var userEmail = document.getElementById('email_field').value;
        var userPassword = document.getElementById('password_field').value;

        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
            .then(function() {
                // Existing and future Auth states are now persisted in the current
                // session only. Closing the window would clear any existing state even
                // if a user forgets to sign out.
                // ...
                // New sign-in will be persisted with session persistence.
                return firebase.auth().signInWithEmailAndPassword(userEmail, userPassword);
            })
            .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // location.href = 'http://127.0.0.1:5500/fitylifenasra/signup.html'
                $('#res').html("Hello!" + errorMessage + "Visit this site to sign in" + ("<a href='http://127.0.0.1:5500/fitylifenasra/signup.html'> here.</a>"));

            });

    });
})