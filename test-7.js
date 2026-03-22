const questions = [
    { "q": "1️⃣ If Tom ___ more vegetables, he would be healthier.", "options": ["eat", "ate", "eaten", "eats"], "answer": "ate" },
    { "q": "2️⃣ She said, 'I ___ my homework before dinner yesterday.'", "options": ["finish", "finishes", "finished", "finishing"], "answer": "finished" },
    { "q": "3️⃣ I wish I ___ more time to read books.", "options": ["have", "had", "will have", "has"], "answer": "had" },
    { "q": "4️⃣ He asked me if I ___ the new restaurant in town.", "options": ["try", "tried", "tries", "trying"], "answer": "tried" },
    { "q": "5️⃣ If you had trained harder, you ___ the marathon.", "options": ["win", "won", "will win", "could have won"], "answer": "could have won" },
    { "q": "6️⃣ Lisa mentioned she ___ swim when she was five.", "options": ["can", "could", "will", "must"], "answer": "could" },
    { "q": "7️⃣ If they ___ a taxi, they wouldn’t have been late.", "options": ["take", "took", "had taken", "will take"], "answer": "had taken" },
    { "q": "8️⃣ He told me that he ___ his keys at home.", "options": ["forget", "forgot", "had forgotten", "forgets"], "answer": "had forgotten" },
    { "q": "9️⃣ If I won the lottery, I ___ a house by the beach.", "options": ["buy", "bought", "would buy", "will buy"], "answer": "would buy" },
    { "q": "🔟 She asked why he ___ so tired.", "options": ["is", "was", "were", "had been"], "answer": "was" },
    { "q": "1️⃣1️⃣ If we ___ a flashlight, we wouldn’t have been scared in the dark.", "options": ["bring", "brought", "had brought", "will bring"], "answer": "had brought" },
    { "q": "1️⃣2️⃣ You can use my phone if yours ___ out of battery.", "options": ["run", "ran", "runs", "running"], "answer": "runs" },
    { "q": "1️⃣3️⃣ Jake asked me if I ___ the science experiment.", "options": ["complete", "completed", "had completed", "completes"], "answer": "had completed" },
    { "q": "1️⃣4️⃣ Anna said that she ___ play the piano since she was a child.", "options": ["can", "could", "will", "may"], "answer": "could" },
    { "q": "1️⃣5️⃣ If I ___ a pet, I would get a dog.", "options": ["have", "had", "will have", "has"], "answer": "had" },
    { "q": "1️⃣6️⃣ If she ___ the email earlier, she wouldn’t have missed the meeting.", "options": ["reads", "read", "had read", "will read"], "answer": "had read" },
    { "q": "1️⃣7️⃣ They mentioned that they ___ go on vacation next summer.", "options": ["must", "had to", "have to", "would have to"], "answer": "had to" },
    { "q": "1️⃣8️⃣ She asked me where I ___ before I moved here.", "options": ["live", "lived", "had lived", "will live"], "answer": "had lived" },
    { "q": "1️⃣9️⃣ If he ___ more carefully, he wouldn’t make so many mistakes.", "options": ["work", "worked", "had worked", "works"], "answer": "worked" },
    { "q": "2️⃣0️⃣ They mentioned that they ___ finished the project before the deadline.", "options": ["have", "had", "has", "having"], "answer": "had" }
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