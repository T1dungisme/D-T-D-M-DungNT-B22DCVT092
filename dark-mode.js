window.onload = function () {
    const toggleButton = document.getElementById("darkModeToggle");
    if (!toggleButton) return; // Nếu không tìm thấy nút, thoát sớm

    const body = document.body;

    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        toggleButton.textContent = "☀️ Chế độ sáng";
    }

    toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
            toggleButton.textContent = "☀️ Chế độ sáng";
        } else {
            localStorage.setItem("dark-mode", "disabled");
            toggleButton.textContent = "🌙 Chế độ tối";
        }
    });
};



document.addEventListener("DOMContentLoaded", function () {
    const welcomeText = document.querySelector(".welcome-text");
    
    function createSnowflake() {
        const snowflake = document.createElement("span");
        snowflake.classList.add("snowflake");
        snowflake.innerHTML = "❄"; // Icon bông tuyết
        snowflake.style.left = Math.random() * 100 + "vw"; // Ngẫu nhiên vị trí ngang
        snowflake.style.animationDuration = (Math.random() * 3 + 2) + "s"; // Thời gian rơi khác nhau
        snowflake.style.fontSize = Math.random() * 15 + 10 + "px"; // Kích thước tuyết ngẫu nhiên
        snowflake.style.opacity = Math.random(); // Độ trong suốt ngẫu nhiên
        
        document.body.appendChild(snowflake);
        
        setTimeout(() => {
            snowflake.remove();
        }, 5000); // Loại bỏ tuyết sau khi rơi
    }
    
    setInterval(createSnowflake, 200); // Tạo hạt tuyết mới mỗi 200ms
});
