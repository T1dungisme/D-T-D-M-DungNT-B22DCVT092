const questions = [
    { "q": "1️⃣ If Jake ___ more water, he wouldn't feel so dehydrated.", "options": ["drinks", "drank", "had drunk", "will drink"], "answer": "had drunk" },
    { "q": "2️⃣ She said, 'I ___ my homework before dinner yesterday.'", "options": ["finish", "finished", "finishing", "finishes"], "answer": "finished" },
    { "q": "3️⃣ I wish I ___ a second language fluently.", "options": ["speak", "spoke", "spoken", "speaks"], "answer": "spoke" },
    { "q": "4️⃣ He asked me if I ___ his message.", "options": ["receive", "received", "receives", "receiving"], "answer": "received" },
    { "q": "5️⃣ If you had saved more money, you ___ a better car.", "options": ["buy", "bought", "will buy", "could have bought"], "answer": "could have bought" },
    { "q": "6️⃣ Emma said she ___ help with the group project.", "options": ["can", "could", "will", "must"], "answer": "could" },
    { "q": "7️⃣ If they ___ the invitation on time, they would have attended the wedding.", "options": ["receive", "received", "had received", "will receive"], "answer": "had received" },
    { "q": "8️⃣ He told me that he ___ to Italy last spring.", "options": ["travel", "traveled", "had traveled", "was traveling"], "answer": "had traveled" },
    { "q": "9️⃣ If I won the lottery, I ___ a new house.", "options": ["buy", "bought", "would buy", "will buy"], "answer": "would buy" },
    { "q": "🔟 She asked why they ___ so late.", "options": ["arrive", "arrived", "arrives", "had arrived"], "answer": "had arrived" },
    { "q": "1️⃣1️⃣ If we ___ a GPS, we wouldn’t have gotten lost.", "options": ["have", "had", "had had", "will have"], "answer": "had had" },
    { "q": "1️⃣2️⃣ You may use my charger if you ___ it carefully.", "options": ["use", "used", "uses", "using"], "answer": "use" },
    { "q": "1️⃣3️⃣ Mike asked if I ___ the new album by my favorite band.", "options": ["listen", "listened", "had listened", "listening"], "answer": "had listened" },
    { "q": "1️⃣4️⃣ Anna said she ___ ride a horse since she was a teenager.", "options": ["can", "could", "will", "must"], "answer": "could" },
    { "q": "1️⃣5️⃣ If I ___ a superpower, I would choose invisibility.", "options": ["have", "had", "will have", "has"], "answer": "had" },
    { "q": "1️⃣6️⃣ If she ___ her alarm, she wouldn't have been late.", "options": ["sets", "set", "had set", "will set"], "answer": "had set" },
    { "q": "1️⃣7️⃣ They mentioned that they ___ relocate for work soon.", "options": ["must", "had to", "have to", "would have to"], "answer": "had to" },
    { "q": "1️⃣8️⃣ She asked me where I ___ before joining this company.", "options": ["work", "worked", "had worked", "will work"], "answer": "had worked" },
    { "q": "1️⃣9️⃣ If he ___ more regularly, he would have better stamina.", "options": ["exercises", "exercised", "had exercised", "will exercise"], "answer": "exercised" },
    { "q": "2️⃣0️⃣ They mentioned that they ___ completed their research before the deadline.", "options": ["have", "had", "has", "having"], "answer": "had" },
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