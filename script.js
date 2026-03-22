// Lấy modal và các phần tử liên quan
const loginModal = document.getElementById("loginModal");
const loginLink = document.getElementById("login-link");
const closeBtn = document.querySelector(".close");
const loginBtn = document.getElementById("loginBtn");

document.addEventListener("DOMContentLoaded", function () {
    const loginLink = document.getElementById("login-link");
    const loginModal = document.getElementById("loginModal");
    const closeBtn = document.querySelector(".close");

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
});

// Xử lý đăng nhập
loginBtn.addEventListener("click", function () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "123456") {
        alert("Đăng nhập thành công!");
        loginModal.style.opacity = "0";
        setTimeout(() => loginModal.style.display = "none", 300);
    } else {
        alert("Sai tài khoản hoặc mật khẩu!");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const registerLink = document.getElementById("register-link");
    const registerModal = document.getElementById("registerModal");
    const registerCloseBtn = document.querySelector(".register-close");

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
});

//Features
document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach((dropdown) => {
        const menu = dropdown.querySelector(".grid-dropdown-content");
        const button = dropdown.querySelector(".dropbtn");

        if (!menu || !button) return; // Kiểm tra tránh lỗi

        // Ẩn menu khi tải lại trang
        menu.style.display = "none";

        button.addEventListener("mouseenter", function () {
            menu.style.display = "grid"; // Hiện menu khi di chuột vào nút
        });

        dropdown.addEventListener("mouseleave", function () {
            menu.style.display = "none"; // Ẩn menu khi rời chuột khỏi dropdown
        });

        menu.addEventListener("mouseenter", function () {
            menu.style.display = "grid"; // Giữ menu mở khi di chuột vào menu
        });

        menu.addEventListener("mouseleave", function () {
            menu.style.display = "none"; // Ẩn menu khi rời chuột khỏi menu
        });
    });
});
document.getElementById("home-link").addEventListener("click", function (event) {
    event.preventDefault(); // Ngăn chặn tải lại trang
    window.scrollTo({ top: 0, behavior: "smooth" }); // Cuộn mượt lên đầu trang
});
