// // Like button functionality
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".like-btn").forEach(btn => {
        btn.onclick = () => {
            btn.classList.toggle("liked");
            btn.innerHTML = btn.classList.contains("liked") ? "♥" : "♡";
        };
    });
});