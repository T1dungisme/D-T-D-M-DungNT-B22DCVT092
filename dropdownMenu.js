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