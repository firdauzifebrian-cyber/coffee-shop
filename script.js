// Dark Mode Toggle
const darkToggle = document.getElementById("darkToggle");

darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Form Submit
document.getElementById("orderForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Pesanan Anda berhasil dikirim!");
});