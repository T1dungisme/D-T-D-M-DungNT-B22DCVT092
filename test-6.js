const questions = [
    { "q": "1️⃣ If Sarah ___ more attentively, she wouldn’t have forgotten the instructions.", "options": ["is", "was", "had been", "will be"], "answer": "had been" },
    { "q": "2️⃣ He said, 'I ___ my cousin last weekend.'", "options": ["visit", "visited", "visiting", "visits"], "answer": "visited" },
    { "q": "3️⃣ I wish I ___ a bigger house.", "options": ["have", "had", "will have", "has"], "answer": "had" },
    { "q": "4️⃣ She asked me if I ___ the concert.", "options": ["attend", "attended", "attends", "attending"], "answer": "attended" },
    { "q": "5️⃣ If you had left earlier, you ___ the bus.", "options": ["catch", "caught", "will catch", "could have caught"], "answer": "could have caught" },
    { "q": "6️⃣ David mentioned he ___ help us organize the event.", "options": ["can", "could", "will", "may"], "answer": "could" },
    { "q": "7️⃣ If they ___ the alarm, they wouldn’t have overslept.", "options": ["set", "setted", "had set", "will set"], "answer": "had set" },
    { "q": "8️⃣ She told me that she ___ to Italy the previous year.", "options": ["travel", "traveled", "had traveled", "was traveling"], "answer": "had traveled" },
    { "q": "9️⃣ If I found a good deal, I ___ a new laptop.", "options": ["buy", "bought", "would buy", "will buy"], "answer": "would buy" },
    { "q": "🔟 He asked why she ___ so upset.", "options": ["is", "was", "were", "had been"], "answer": "was" },
    { "q": "1️⃣1️⃣ If we ___ better preparation, we would have won.", "options": ["have had", "had", "had had", "will have"], "answer": "had had" },
    { "q": "1️⃣2️⃣ You may use my pen if you ___ it back.", "options": ["return", "returned", "will return", "had returned"], "answer": "return" },
    { "q": "1️⃣3️⃣ Emma asked me if I ___ that novel.", "options": ["read", "reads", "had read", "was reading"], "answer": "had read" },
    { "q": "1️⃣4️⃣ Paul said that he ___ drive a car since he was sixteen.", "options": ["can", "could", "will", "may"], "answer": "could" },
    { "q": "1️⃣5️⃣ If I ___ a better job, I would move to another city.", "options": ["have", "had", "will have", "has"], "answer": "had" },
    { "q": "1️⃣6️⃣ If she ___ the appointment on time, she wouldn’t have missed it.", "options": ["attends", "attended", "had attended", "will attend"], "answer": "had attended" },
    { "q": "1️⃣7️⃣ They mentioned that they ___ relocate soon.", "options": ["must", "had to", "have to", "would have to"], "answer": "had to" },
    { "q": "1️⃣8️⃣ She asked me where I ___ before moving abroad.", "options": ["live", "lived", "had lived", "will live"], "answer": "had lived" },
    { "q": "1️⃣9️⃣ If he ___ more consistently, he would be healthier.", "options": ["exercises", "exercised", "had exercised", "will exercise"], "answer": "exercised" },
    { "q": "2️⃣0️⃣ They mentioned that they ___ completed the assignment before the deadline.", "options": ["have", "had", "has", "having"], "answer": "had" }
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