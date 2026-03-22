const loginModal = document.getElementById("loginModal");
const loginLink = document.getElementById("login-link");
const closeBtn = document.querySelector(".close");

document.addEventListener("DOMContentLoaded", function () {

    // Mở modal khi nhấn "Đăng nhập"
    loginLink.addEventListener("click", function (event) {
        event.preventDefault(); // Ngăn chặn load trang mới
        loginModal.style.display = "flex";
    });

    // Đóng modal khi nhấn nút "X"
    closeBtn.addEventListener("click", function () {
        loginModal.style.display = "none";
    });

    // Đóng modal khi nhấn ra ngoài
    window.addEventListener("click", function (event) {
        if (event.target === loginModal) {
            loginModal.style.display = "none";
        }
    });
    document.getElementById("loginModal").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Ngăn chặn hành động mặc định
            document.getElementById("loginBtn").click(); // Tự động bấm nút đăng nhập
        }
    });    
});