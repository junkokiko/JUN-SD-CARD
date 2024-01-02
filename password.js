function checkPassword() {
    var password = document.getElementById("password").value;

    // Replace "yourPassword" with the actual password you want to use
    if (password === "NOHISASIMP") {
        // Redirect to the gallery page if the password is correct
        window.location.href = "gallery.html";
    } else {
        // Display an error message or take any other action for incorrect passwords
        alert("Dont guess. Just get the password from me");
    }
}
function checkPassword() {
    var password = document.getElementById("password").value;

    // AJAX request to the server
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "checkPassword.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            if (xhr.responseText === "success") {
                // Redirect to the gallery page if the password is correct
                window.location.href = "gallery.html";
            } else {
                // Display an error message or take any other action for incorrect passwords
                alert("Dont guess. just get the password from me");
            }
        }
    };

    // Send the password to the server
    xhr.send("password=" + encodeURIComponent(password));
}

