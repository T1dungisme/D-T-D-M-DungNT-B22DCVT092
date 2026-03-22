// Tạo một Observer để theo dõi khi phần tử vào và ra khỏi viewport
const features = document.querySelectorAll('.feature');

const observerOptions = {
  root: null, // Dùng viewport của trình duyệt
  rootMargin: '0px',
  threshold: 0.1, // Phần tử được coi là vào viewport khi 10% diện tích của nó xuất hiện
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show'); // Thêm lớp show khi phần tử vào viewport
    } else {
      entry.target.classList.remove('show'); // Xóa lớp show khi phần tử ra khỏi viewport
    }
  });
}, observerOptions);

// Quan sát tất cả các phần tử .feature
features.forEach(feature => {
  observer.observe(feature);
});
