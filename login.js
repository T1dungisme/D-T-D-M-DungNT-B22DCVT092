document.getElementById("loginBtn").addEventListener("click", async function () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const usernameRegex = /^[a-zA-Z0-9_]{6,}$/;
    const passwordRegex = /^[a-zA-Z0-9]{6,}$/;

    if (!username || !password) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    if (!usernameRegex.test(username)) {
        alert("Tên đăng nhập không hợp lệ!");
        return;
    }

    if (!passwordRegex.test(password)) {
        alert("Mật khẩu không hợp lệ!");
        return;
    }

    try {
        const response = await fetch("/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (response.ok) {
            localStorage.setItem("token", data.token);
            localStorage.setItem("username", data.username);

            alert("Đăng nhập thành công!");
            updateUI();
            document.getElementById("loginModal").style.display = "none";
        } else {
            alert(data.message || "Lỗi đăng nhập");
        }
    } catch (error) {
        console.error("Lỗi kết nối server:", error);
        alert("Không thể kết nối server!");
    }
});





function updateUI() {
    const username = localStorage.getItem("username");
    const userDisplay = document.getElementById("userDisplay");
    const logoutBtn = document.getElementById("logoutBtn");
    const loginLink = document.getElementById("login-link");
    const registerLink = document.getElementById("register-link");

    if (!userDisplay || !logoutBtn || !loginLink || !registerLink) return;

    if (username) {
        // Cập nhật giao diện khi đã đăng nhập
        userDisplay.innerHTML = `
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
                 alt="User Icon" class="user-icon">
            <span class="username">${username}</span>
        `;
        userDisplay.style.display = "flex";
        logoutBtn.style.display = "inline-block";
        loginLink.style.display = "none";
        registerLink.style.display = "none";
    } else {
        // Khi chưa đăng nhập
        userDisplay.style.display = "none";
        logoutBtn.style.display = "none";
        loginLink.style.display = "inline-block";
        registerLink.style.display = "inline-block";
    }
}

// Gọi `updateUI()` khi trang load
document.addEventListener("DOMContentLoaded", updateUI);


