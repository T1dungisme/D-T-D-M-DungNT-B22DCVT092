// Đăng xuất
document.getElementById("logoutBtn").addEventListener("click", function () {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    alert("Bạn đã đăng xuất!");
    updateUI(); // Cập nhật giao diện sau khi đăng xuất
});