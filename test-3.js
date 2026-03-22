const questions = [
    { q: "1️⃣ If Tom ___ harder, he would pass the test.", options: ["studies", "studied", "had studied", "will study"], answer: "studied" },
    { q: "2️⃣ She said, 'I ___ to the museum last weekend.'", options: ["go", "went", "gone", "going"], answer: "went" },
    { q: "3️⃣ I wish I ___ taller.", options: ["am", "was", "were", "be"], answer: "were" },
    { q: "4️⃣ He asked me if I ___ pizza.", options: ["like", "liked", "likes", "liking"], answer: "liked" },
    { q: "5️⃣ If I had woken up earlier, I ___ the bus.", options: ["catch", "caught", "will catch", "would have caught"], answer: "would have caught" },
    { q: "6️⃣ She said she ___ call me later.", options: ["calls", "called", "would call", "will call"], answer: "would call" },
    { q: "7️⃣ If she ___ more carefully, she wouldn’t have made a mistake.", options: ["is", "was", "had been", "will be"], answer: "had been" },
    { q: "8️⃣ They said that they ___ to Italy the previous summer.", options: ["travel", "traveled", "had traveled", "were traveling"], answer: "had traveled" },
    { q: "9️⃣ If I had more free time, I ___ a new hobby.", options: ["start", "started", "would start", "will start"], answer: "would start" },
    { q: "🔟 He asked why I ___ so nervous.", options: ["am", "was", "were", "had been"], answer: "was" },
    { q: "1️⃣1️⃣ If we ___ a better map, we wouldn’t have got lost.", options: ["have had", "had", "had had", "will have"], answer: "had had" },
    { q: "1️⃣2️⃣ You can use my laptop if you ___ it carefully.", options: ["use", "used", "will use", "had used"], answer: "use" },
    { q: "1️⃣3️⃣ Alice asked me if I ___ the book already.", options: ["read", "reads", "had read", "was reading"], answer: "had read" },
    { q: "1️⃣4️⃣ David said that he ___ drive when he was 16.", options: ["could", "can", "will", "may"], answer: "could" },
    { q: "1️⃣5️⃣ If I ___ a car, I would go on a road trip.", options: ["have", "had", "will have", "has"], answer: "had" },
    { q: "1️⃣6️⃣ If they ___ on time, they wouldn’t have missed the event.", options: ["arrive", "arrived", "had arrived", "will arrive"], answer: "had arrived" },
    { q: "1️⃣7️⃣ They said that they ___ to move to a new apartment.", options: ["must", "had to", "have to", "would have to"], answer: "had to" },
    { q: "1️⃣8️⃣ She asked me where I ___ before moving here.", options: ["live", "lived", "had lived", "will live"], answer: "had lived" },
    { q: "1️⃣9️⃣ If he ___ more often, he would be healthier.", options: ["exercises", "exercised", "had exercised", "will exercise"], answer: "exercised" },
    { q: "2️⃣0️⃣ They told me that they ___ just finished their homework.", options: ["have", "had", "has", "having"], answer: "had" }
];




function loadQuiz() {
    const quizContainer = document.getElementById("quiz");
    quizContainer.innerHTML = ""; // Xóa nội dung cũ
    document.getElementById("submit-btn").style.display = "block"; // Hiển thị lại nút "Nộp bài" khi tải lại quiz
    document.getElementById("result").innerHTML = ""; // Xóa kết quả cũ

    questions.forEach((q, index) => {
        // Tạo các đáp án theo hàng ngang
        let optionsHTML = q.options.map(option => `
            <label>
                <input type="radio" name="q${index}" value="${option}"> ${option}
            </label>
        `).join('');

        // Gộp tất cả vào một hộp câu hỏi
        quizContainer.innerHTML += `
            <div class="quiz-box">
                <p class="question">${q.q}</p>
                <div class="answers">${optionsHTML}</div> <!-- Đáp án được bọc trong div -->
            </div>
        `;
    });
}

function submitQuiz() {
    let score = 0;
    let quizContainer = document.getElementById("quiz");
    let resultContainer = document.getElementById("result");
    let answers = document.querySelectorAll("input[type='radio']:checked");
    quizContainer.innerHTML = "";

    questions.forEach((q, index) => {
        let userAnswer = [...answers].find(a => a.name === `q${index}`)?.value;
        let correct = userAnswer === q.answer;
        if (correct) score++;
        quizContainer.innerHTML += `
            <div class="quiz-box">
                <p class="question">${q.q}</p>
                <p class="${correct ? 'correct' : 'incorrect'}">
                    Your answer: ${userAnswer || 'No answer'} - ${correct ? '✅ Correct' : '❌ Incorrect (Correct: ' + q.answer + ')' }
                </p>
            </div>
        `;
    });

    resultContainer.innerHTML = `
        <p>📊 Bạn đạt ${score*0.5} / 10 điểm</p>
        <button onclick="ContinueTest()">📊 Tiếp tục kiểm tra</button>
        <button onclick="goHome()">🏠 Quay lại trang chủ</button>
    `;
    document.getElementById("submit-btn").style.display = "none"; // Ẩn nút "Nộp bài" sau khi hoàn thành
}

// Hàm quay lại trang chủ
function ContinueTest() {
    window.location.href = "kiem-tra.html";
}
function goHome() {
    window.location.href = "index.html";
}
document.addEventListener("DOMContentLoaded", loadQuiz);