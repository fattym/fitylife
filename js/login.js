firebase.auth().onAuthStateChanged(function(user) {
    // [START_EXCLUDE silent]
    document.getElementById('quickstart-verify-email').disabled = true;
    // [END_EXCLUDE]
    if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // [START_EXCLUDE]
        document.getElementById('quickstart-sign-in-status').textContent = 'Signed in';
        document.getElementById('quickstart-sign-in').textContent = 'Sign out';
        document.getElementById('quickstart-account-details').textContent = JSON.stringify(user, null, '  ');
        if (!emailVerified) {
            document.getElementById('quickstart-verify-email').disabled = false;
        }
        // [END_EXCLUDE]
    } else {
        // User is signed out.
        // [START_EXCLUDE]
        document.getElementById('quickstart-sign-in-status').textContent = 'Signed out';
        document.getElementById('quickstart-sign-in').textContent = 'Sign in';
        document.getElementById('quickstart-account-details').textContent = 'null';
        // [END_EXCLUDE]
    }
    // [START_EXCLUDE silent]
    document.getElementById('quickstart-sign-in').disabled = false;
    // [END_EXCLUDE]
});
// [END authstatelistener]

document.getElementById('quickstart-sign-in').addEventListener('click', toggleSignIn, false);
document.getElementById('quickstart-sign-up').addEventListener('click', handleSignUp, false);
document.getElementById('quickstart-verify-email').addEventListener('click', sendEmailVerification, false);
document.getElementById('quickstart-password-reset').addEventListener('click', sendPasswordReset, false);

window.onload = function() {
    initApp();
};