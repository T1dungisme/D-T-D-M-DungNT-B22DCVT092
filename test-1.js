const questions = [
    { q: "1️⃣ If it ___ tomorrow, we will stay home.", options: ["rains", "rained", "will rain", "rain"], answer: "rains" },
    { q: "2️⃣ He said, 'I ___ to the store yesterday.'", options: ["go", "went", "gone", "going"], answer: "went" },
    { q: "3️⃣ I wish I ___ a millionaire.", options: ["am", "was", "were", "be"], answer: "were" },
    { q: "4️⃣ She asked me if I ___ coffee.", options: ["like", "liked", "likes", "liking"], answer: "liked" },
    { q: "5️⃣ If I had studied harder, I ___ the exam.", options: ["pass", "passed", "will pass", "would have passed"], answer: "would have passed" },
    { q: "6️⃣ He said he ___ me the next day.", options: ["calls", "called", "would call", "will call"], answer: "would call" },
    { q: "7️⃣ If she ___ more careful, she wouldn’t have broken the vase.", options: ["is", "was", "had been", "will be"], answer: "had been" },
    { q: "8️⃣ They said that they ___ Paris the previous year.", options: ["visit", "visited", "had visited", "were visiting"], answer: "had visited" },
    { q: "9️⃣ If I won the lottery, I ___ a new car.", options: ["buy", "bought", "would buy", "will buy"], answer: "would buy" },
    { q: "🔟 She asked why I ___ late.", options: ["am", "was", "were", "had been"], answer: "was" },
    { q: "1️⃣1️⃣ If we ___ a map, we wouldn’t have got lost.", options: ["have had", "had", "had had", "will have"], answer: "had had" },
    { q: "1️⃣2️⃣ You can borrow my bike if you ___ it back before 5 PM.", options: ["bring", "brought", "will bring", "had brought"], answer: "bring" },
    { q: "1️⃣3️⃣ Mary asked me if I ___ the movie.", options: ["see", "saw", "had seen", "was seeing"], answer: "had seen" },
    { q: "1️⃣4️⃣ John said that he ___ swim well.", options: ["could", "can", "will", "may"], answer: "could" },
    { q: "1️⃣5️⃣ If I ___ enough money, I would travel around the world.", options: ["have", "had", "will have", "has"], answer: "had" },
    { q: "1️⃣6️⃣ If they ___ earlier, they wouldn’t have missed the train.", options: ["leave", "left", "had left", "will leave"], answer: "had left" },
    { q: "1️⃣7️⃣ They said that they ___ leave then.", options: ["must", "had to", "have to", "would have to"], answer: "had to" },
    { q: "1️⃣8️⃣ She asked me where I ___.", options: ["live", "lived", "had lived", "will live"], answer: "lived" },
    { q: "1️⃣9️⃣ If he ___ harder, he would pass the exam.", options: ["studies", "studied", "will study", "study"], answer: "studied" },
    { q: "2️⃣0️⃣ They told me that they ___ already finished their work.", options: ["have", "had", "has", "having"], answer: "had" }
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