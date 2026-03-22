// Hiển thị modal
function goToTest(url) {
    window.location.href = url; // Chuyển hướng đến URL đã truyền vào
}

function showModal(videoId) {
    var modal = document.getElementById(videoId);
    modal.style.display = "flex"; // Hiển thị modal
}

// Đóng modal
function closeModal(videoId) {
    var modal = document.getElementById(videoId);
    modal.style.display = "none"; // Ẩn modal
}

// Nếu người dùng nhấn vào bên ngoài modal, nó cũng sẽ đóng
window.onclick = function(event) {
    var modals = document.querySelectorAll('.modal');
    modals.forEach(function(modal) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}
