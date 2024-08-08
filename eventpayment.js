document.getElementById("payBtn").addEventListener("click", function () {
  document.getElementById("paymentModal").style.display = "block";
});

document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("paymentModal").style.display = "none";
});

document.getElementById("backBtn").addEventListener("click", function () {
  document.getElementById("paymentModal").style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == document.getElementById("paymentModal")) {
    document.getElementById("paymentModal").style.display = "none";
  }
});




