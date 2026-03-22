document.getElementById("registerBtn").addEventListener("click", async function () {
    const username = document.getElementById("register-username").value.trim();
    const email = document.getElementById("register-email").value.trim();
    const password = document.getElementById("register-password").value.trim();

    // 🛑 Kiểm tra rỗng
    if (!username || !email || !password) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    // 🔍 Kiểm tra định dạng email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert("Email không hợp lệ! Vui lòng nhập đúng định dạng email.");
        return;
    }

    // 🔍 Kiểm tra độ dài username
    if (username.length < 6) {
        alert("Tên đăng nhập phải có ít nhất 6 ký tự!");
        return;
    }

    // 🔒 Kiểm tra độ mạnh của mật khẩu
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!passwordRegex.test(password)) {
        alert("Mật khẩu phải có ít nhất 6 ký tự, bao gồm cả chữ và số!");
        return;
    }

    // 📨 Gửi request đăng ký
    try {
        const response = await fetch("/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, email, password }),
        });

        const data = await response.json();
        if (response.ok) {
            alert("Đăng ký thành công! Vui lòng kiểm tra email để xác nhận tài khoản.");
        } else {
            alert(data.msg); // Hiển thị lỗi từ server
        }
    } catch (error) {
        console.error("Lỗi kết nối server:", error);
        alert("Không thể kết nối server!");
    }
});
