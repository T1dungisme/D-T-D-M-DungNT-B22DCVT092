function checkAnswer(question, correctAnswer) {
    let selectedAnswer = document.querySelector(`input[name="${question}"]:checked`);
    let resultElement = document.getElementById(`result-${question}`);
    
    if (!selectedAnswer) {
        resultElement.textContent = "Vui lòng chọn một đáp án.";
        resultElement.classList.remove("correct", "incorrect");
        return;
    }

    if (selectedAnswer.value === correctAnswer) {
        resultElement.textContent = "Đúng rồi!";
        resultElement.classList.add("correct");
        resultElement.classList.remove("incorrect");
    } else {
        resultElement.textContent = "Sai rồi!";
        resultElement.classList.add("incorrect");
        resultElement.classList.remove("correct");
    }
}
