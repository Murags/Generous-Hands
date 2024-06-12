// JavaScript for the login modal form
// Get the modal and the login form
var modal = document.getElementById("login-modal");
var loginForm = document.getElementById("login-form");

// Get the close button
var close = document.getElementById("close");

// When the user clicks on the close button, close the modal
close.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Add event listener to the login form
loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    // Perform login logic here
    // For example, you can use the Fetch API to send a POST request to your server
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: document.getElementById("email").value,
            password: document.getElementById("password").value
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Login was successful, redirect to the dashboard
            window.location.href = '/dashboard';
        } else {
            // Login failed, display an error message
            alert("Invalid email or password");
        }
    })
    .catch(error => console.error(error));
})