document.getElementById("home-link").addEventListener("click", function (event) {
    event.preventDefault(); // Ngăn chặn tải lại trang
    window.scrollTo({ top: 0, behavior: "smooth" }); // Cuộn mượt lên đầu trang
});
