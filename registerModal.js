const registerLink = document.getElementById("register-link");
const registerModal = document.getElementById("registerModal");
const registerCloseBtn = document.querySelector(".register-close");

document.addEventListener("DOMContentLoaded", function () {
    // Mở modal khi nhấn "Đăng ký"
    registerLink.addEventListener("click", function (event) {
        event.preventDefault(); // Ngăn chặn load trang mới
        registerModal.style.display = "flex";
    });

    // Đóng modal khi nhấn nút "X"
    registerCloseBtn.addEventListener("click", function () {
        registerModal.style.display = "none";
    });

    // Đóng modal khi nhấn ra ngoài
    window.addEventListener("click", function (event) {
        if (event.target === registerModal) {
            registerModal.style.display = "none";
        }
    });
    registerModal.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Ngăn reload trang
            registerBtn.click(); // Giả lập click vào nút đăng ký
        }
    });
    
});