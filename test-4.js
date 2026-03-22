const questions = [
    { q: "1️⃣ If Lisa ___ more carefully, she wouldn’t have dropped her phone.", options: ["is", "was", "had been", "will be"], answer: "had been" },
    { q: "2️⃣ He said, 'I ___ my grandparents last Sunday.'", options: ["visit", "visited", "visiting", "visits"], answer: "visited" },
    { q: "3️⃣ I wish I ___ more time to travel.", options: ["have", "had", "will have", "has"], answer: "had" },
    { q: "4️⃣ She asked me if I ___ Spanish.", options: ["speak", "spoke", "speaks", "speaking"], answer: "spoke" },
    { q: "5️⃣ If you had saved more money, you ___ a new laptop.", options: ["buy", "bought", "will buy", "could have bought"], answer: "could have bought" },
    { q: "6️⃣ Tom said he ___ help us with the project.", options: ["can", "could", "will", "may"], answer: "could" },
    { q: "7️⃣ If they ___ earlier, they wouldn’t have been late.", options: ["leave", "left", "had left", "will leave"], answer: "had left" },
    { q: "8️⃣ They said that they ___ to Japan two years ago.", options: ["travel", "traveled", "had traveled", "were traveling"], answer: "had traveled" },
    { q: "9️⃣ If I won a scholarship, I ___ abroad.", options: ["study", "studied", "would study", "will study"], answer: "would study" },
    { q: "🔟 She asked why he ___ upset.", options: ["is", "was", "were", "had been"], answer: "was" },
    { q: "1️⃣1️⃣ If we ___ a GPS, we wouldn’t have gotten lost.", options: ["have had", "had", "had had", "will have"], answer: "had had" },
    { q: "1️⃣2️⃣ You may use my tablet if you ___ it carefully.", options: ["use", "used", "will use", "had used"], answer: "use" },
    { q: "1️⃣3️⃣ Emma asked me if I ___ that TV series.", options: ["watch", "watched", "had watched", "was watching"], answer: "had watched" },
    { q: "1️⃣4️⃣ Jake said that he ___ swim since he was five.", options: ["can", "could", "will", "may"], answer: "could" },
    { q: "1️⃣5️⃣ If I ___ a new phone, I would take better pictures.", options: ["have", "had", "will have", "has"], answer: "had" },
    { q: "1️⃣6️⃣ If she ___ the meeting on time, she would have heard the announcement.", options: ["attends", "attended", "had attended", "will attend"], answer: "had attended" },
    { q: "1️⃣7️⃣ They said that they ___ move to a new city soon.", options: ["must", "had to", "have to", "would have to"], answer: "had to" },
    { q: "1️⃣8️⃣ She asked me where I ___ before moving to London.", options: ["live", "lived", "had lived", "will live"], answer: "had lived" },
    { q: "1️⃣9️⃣ If he ___ more often, he would be in better shape.", options: ["exercises", "exercised", "had exercised", "will exercise"], answer: "exercised" },
    { q: "2️⃣0️⃣ They told me that they ___ already completed their assignments.", options: ["have", "had", "has", "having"], answer: "had" }
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