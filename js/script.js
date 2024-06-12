// Get the modal elements
var signupModal = document.getElementById("signup-modal");
var loginModal = document.getElementById("login-modal");

// Get the buttons that open the modals
var signupBtn = document.getElementById("signup-link");
var loginBtn = document.getElementById("login-into");

// Get the <span> elements that close the modals
var closeButtons = document.getElementsByClassName("close");

// When the user clicks the signup button, open the signup modal
signupBtn.onclick = function() {
    signupModal.style.display = "block";
}

// When the user clicks the login link, open the login modal
loginBtn.onclick = function() {
    signupModal.style.display = "none"
    loginModal.style.display = "block";
}

// Assign the close functionality to each close button
closeButtons[0].onclick = function() {
    signupModal.style.display = "none";
}

closeButtons[1].onclick = function() {
    loginModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == signupModal) {
        signupModal.style.display = "none";
    } else if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
}