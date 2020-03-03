firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        document.getElementById("user_div").style.display = "block";
        document.getElementById("login_div").style.display = "none";
        var user = firebase.auth().currentUser;
        if (user != null) {
            var email_id = user.email;
            document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
        }
    } else {
        // No user is signed in.
        document.getElementById("user_div").style.display = "none";
        document.getElementById("login_div").style.display = "block";
    }
});

function login() {
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("Error : " + errorMessage);
        // ...
    });
}

function logout() {
    firebase.auth().signOut();
}

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
        //document.getElementById("login_div").style.display = "block";
        document.getElementById("signup_div").style.display = "block"
    }
});

function signup() {
    var username = document.getElementById('name').value;
    var useremail = document.getElementById('email').value;
    var userpassword = document.getElementById('password').value;
    var userconfpassword = document.getElementById('repeat_password').value;
    // window.alert(useremail +" "+userpassword+" "+userconfpassword)
    if (userpassword === userconfpassword) {
        firebase.auth().createUserWithEmailAndPassword(useremail, userpassword).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            window.alert('Error: ' + errorMessage)
        });
    } else {
        window.alert("Email or password not correct")
    }
}