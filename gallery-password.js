function checkGalleryPassword() {
    var galleryPassword = document.getElementById("galleryPassword").value;

    // Replace "galleryPassword123" with the actual password you want to use
    if (galleryPassword === "123") {
        // Show the image section and hide the password section
        document.getElementById("passwordSection").style.display = "none";
        document.getElementById("imageSection").style.display = "grid";
    } else {
        // Display an error message or take any other action for incorrect passwords
        alert("Incorrect gallery password. Please try again.");
    }
}
