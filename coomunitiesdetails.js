// Get the modal
var modal = document.getElementById("logoutModal");



// Get the button that opens the modal
var btn = document.getElementById("logoutBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the confirm button
var confirmBtn = document.getElementById("confirmLogout");

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks on the confirm button, log out
confirmBtn.onclick = function() {
    alert("Logging out...");
     window.location.href = 'dashbord.html';
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}