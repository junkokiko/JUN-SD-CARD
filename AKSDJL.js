function checkPassword() {
    var password = document.getElementById("password").value;

    // Replace "yourPassword" with the actual password you want to use
    if (password === "JSDATAS") {
        // Redirect to the gallery page if the password is correct
        window.location.href = "gallery.html";
    } else {
        // Display an error message or take any other action for incorrect passwords
        alert("Dont guess, just get the password from me");
    }
}
