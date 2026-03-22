const questions = [
    { "q": "1️⃣ If Sarah ___ more time, she would join a dance class.", "options": ["has", "had", "will have", "having"], "answer": "had" },
    { "q": "2️⃣ He said, 'I ___ my grandparents last weekend.'", "options": ["visit", "visits", "visited", "visiting"], "answer": "visited" },
    { "q": "3️⃣ I wish I ___ how to play the guitar.", "options": ["know", "knew", "known", "knows"], "answer": "knew" },
    { "q": "4️⃣ She asked me if I ___ the concert last night.", "options": ["enjoy", "enjoyed", "enjoys", "enjoying"], "answer": "enjoyed" },
    { "q": "5️⃣ If you had woken up earlier, you ___ the train.", "options": ["catch", "caught", "will catch", "could have caught"], "answer": "could have caught" },
    { "q": "6️⃣ Tom mentioned he ___ drive since he was sixteen.", "options": ["can", "could", "will", "may"], "answer": "could" },
    { "q": "7️⃣ If they ___ the correct address, they wouldn’t have gotten lost.", "options": ["write", "wrote", "had written", "will write"], "answer": "had written" },
    { "q": "8️⃣ She told me that she ___ to a new apartment last month.", "options": ["move", "moved", "had moved", "was moving"], "answer": "had moved" },
    { "q": "9️⃣ If I were a millionaire, I ___ a sports car.", "options": ["buy", "bought", "would buy", "will buy"], "answer": "would buy" },
    { "q": "🔟 He asked why she ___ so upset.", "options": ["is", "was", "were", "had been"], "answer": "was" },
    { "q": "1️⃣1️⃣ If we ___ a better map, we wouldn’t have taken the wrong turn.", "options": ["have", "had", "had had", "will have"], "answer": "had had" },
    { "q": "1️⃣2️⃣ You may use my tablet if you ___ it carefully.", "options": ["handle", "handled", "handles", "handling"], "answer": "handle" },
    { "q": "1️⃣3️⃣ James asked if I ___ the latest book in the series.", "options": ["read", "reads", "had read", "reading"], "answer": "had read" },
    { "q": "1️⃣4️⃣ Sophia said she ___ swim when she was a kid.", "options": ["can", "could", "will", "must"], "answer": "could" },
    { "q": "1️⃣5️⃣ If I ___ a new hobby, I would choose painting.", "options": ["have", "had", "will have", "has"], "answer": "had" },
    { "q": "1️⃣6️⃣ If she ___ the weather forecast, she wouldn’t have forgotten her umbrella.", "options": ["check", "checked", "had checked", "will check"], "answer": "had checked" },
    { "q": "1️⃣7️⃣ They mentioned that they ___ take an exam next week.", "options": ["must", "had to", "have to", "would have to"], "answer": "had to" },
    { "q": "1️⃣8️⃣ She asked me where I ___ before moving to this city.", "options": ["live", "lived", "had lived", "will live"], "answer": "had lived" },
    { "q": "1️⃣9️⃣ If he ___ more often, he would be in better shape.", "options": ["exercise", "exercised", "had exercised", "exercises"], "answer": "exercised" },
    { "q": "2️⃣0️⃣ They mentioned that they ___ completed their assignments on time.", "options": ["have", "had", "has", "having"], "answer": "had" }
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