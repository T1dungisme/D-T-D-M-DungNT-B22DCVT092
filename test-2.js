const questions = [
    { q: "1️⃣ If she ___ to the party, she would have met John.", options: ["goes", "went", "had gone", "will go"], answer: "had gone" },
    { q: "2️⃣ He said, 'I ___ my homework before dinner.'", options: ["do", "did", "done", "doing"], answer: "did" },
    { q: "3️⃣ I wish I ___ more time to travel.", options: ["have", "had", "will have", "has"], answer: "had" },
    { q: "4️⃣ She asked me if I ___ football.", options: ["play", "played", "plays", "playing"], answer: "played" },
    { q: "5️⃣ If I had saved more money, I ___ a new laptop.", options: ["buy", "bought", "will buy", "would have bought"], answer: "would have bought" },
    { q: "6️⃣ He said he ___ her the following week.", options: ["sees", "saw", "would see", "will see"], answer: "would see" },
    { q: "7️⃣ If they ___ more careful, they wouldn’t have lost the document.", options: ["are", "were", "had been", "will be"], answer: "had been" },
    { q: "8️⃣ They said that they ___ to London the year before.", options: ["travel", "traveled", "had traveled", "were traveling"], answer: "had traveled" },
    { q: "9️⃣ If I got a promotion, I ___ a bigger house.", options: ["buy", "bought", "would buy", "will buy"], answer: "would buy" },
    { q: "🔟 She asked why he ___ so late.", options: ["is", "was", "were", "had been"], answer: "was" },
    { q: "1️⃣1️⃣ If we ___ a GPS, we wouldn’t have taken the wrong road.", options: ["have had", "had", "had had", "will have"], answer: "had had" },
    { q: "1️⃣2️⃣ You can take my book if you ___ it back tomorrow.", options: ["return", "returned", "will return", "had returned"], answer: "return" },
    { q: "1️⃣3️⃣ Lisa asked me if I ___ the concert.", options: ["see", "saw", "had seen", "was seeing"], answer: "had seen" },
    { q: "1️⃣4️⃣ Mark said that he ___ speak three languages.", options: ["could", "can", "will", "may"], answer: "could" },
    { q: "1️⃣5️⃣ If I ___ more experience, I would apply for the job.", options: ["have", "had", "will have", "has"], answer: "had" },
    { q: "1️⃣6️⃣ If she ___ earlier, she wouldn’t have missed the meeting.", options: ["leave", "left", "had left", "will leave"], answer: "had left" },
    { q: "1️⃣7️⃣ They said that they ___ move to a new house soon.", options: ["must", "had to", "have to", "would have to"], answer: "had to" },
    { q: "1️⃣8️⃣ She asked me where I ___ from.", options: ["come", "came", "had come", "will come"], answer: "came" },
    { q: "1️⃣9️⃣ If he ___ more, he would have won the race.", options: ["trains", "trained", "had trained", "will train"], answer: "had trained" },
    { q: "2️⃣0️⃣ They told me that they ___ already finished the project.", options: ["have", "had", "has", "having"], answer: "had" }
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