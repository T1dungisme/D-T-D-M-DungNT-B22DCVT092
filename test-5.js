const questions = [
    { q: "1️⃣ If Mark ___ more carefully, he wouldn’t have lost his keys.", options: ["is", "was", "had been", "will be"], answer: "had been" },
    { q: "2️⃣ She said, 'I ___ my best friend two days ago.'", options: ["meet", "met", "meeting", "meets"], answer: "met" },
    { q: "3️⃣ I wish I ___ fluent in French.", options: ["am", "was", "were", "will be"], answer: "were" },
    { q: "4️⃣ He asked me if I ___ the news.", options: ["hear", "heard", "hears", "hearing"], answer: "heard" },
    { q: "5️⃣ If you had studied harder, you ___ the exam.", options: ["pass", "passed", "will pass", "could have passed"], answer: "could have passed" },
    { q: "6️⃣ Anna said she ___ help with the decorations.", options: ["can", "could", "will", "must"], answer: "could" },
    { q: "7️⃣ If they ___ earlier, they wouldn’t have missed the flight.", options: ["leave", "left", "had left", "will leave"], answer: "had left" },
    { q: "8️⃣ He told me that he ___ to Paris last summer.", options: ["travel", "traveled", "had traveled", "was traveling"], answer: "had traveled" },
    { q: "9️⃣ If I got a promotion, I ___ a new car.", options: ["buy", "bought", "would buy", "will buy"], answer: "would buy" },
    { q: "🔟 She asked why he ___ so nervous.", options: ["is", "was", "were", "had been"], answer: "was" },
    { q: "1️⃣1️⃣ If we ___ a map, we wouldn’t have gotten lost.", options: ["have had", "had", "had had", "will have"], answer: "had had" },
    { q: "1️⃣2️⃣ You can borrow my laptop if you ___ it carefully.", options: ["use", "used", "will use", "had used"], answer: "use" },
    { q: "1️⃣3️⃣ John asked me if I ___ the latest movie.", options: ["watch", "watched", "had watched", "was watching"], answer: "had watched" },
    { q: "1️⃣4️⃣ Lisa said that she ___ ride a bike since she was a child.", options: ["can", "could", "will", "may"], answer: "could" },
    { q: "1️⃣5️⃣ If I ___ more free time, I would travel the world.", options: ["have", "had", "will have", "has"], answer: "had" },
    { q: "1️⃣6️⃣ If she ___ the bus on time, she wouldn’t have been late.", options: ["catches", "caught", "had caught", "will catch"], answer: "had caught" },
    { q: "1️⃣7️⃣ They mentioned that they ___ move to another country next year.", options: ["must", "had to", "have to", "would have to"], answer: "had to" },
    { q: "1️⃣8️⃣ She asked me where I ___ before coming here.", options: ["live", "lived", "had lived", "will live"], answer: "had lived" },
    { q: "1️⃣9️⃣ If he ___ more regularly, he would be stronger.", options: ["exercises", "exercised", "had exercised", "will exercise"], answer: "exercised" },
    { q: "2️⃣0️⃣ They mentioned that they ___ finished their project before the deadline.", options: ["have", "had", "has", "having"], answer: "had" }
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