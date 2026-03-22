function checkAnswer(question, correctAnswer) {
    let selectedOption = document.querySelector(`input[name="${question}"]:checked`);
    let resultElement = document.getElementById(`result-${question}`);

    if (!selectedOption) {
        resultElement.innerHTML = "⚠️ Vui lòng chọn một đáp án!";
        resultElement.style.color = "orange";
        return;
    }

    if (selectedOption.value === correctAnswer) {
        resultElement.innerHTML = "✅ Chính xác! Tuyệt vời!";
        resultElement.style.color = "green";
    } else {
        let explanations = {
           "q1": {
        "a": "❌ Sai! Đây là câu ghép vì có hai mệnh đề độc lập nối với nhau bằng 'and'.",
        "c": "❌ Sai! Đây là câu phức vì có mệnh đề phụ thuộc bắt đầu bằng 'Because'."
    },
    "q2": {
        "a": "❌ Sai! Đây là câu đơn vì chỉ có một mệnh đề độc lập.",
        "b": "❌ Sai! Đây là câu phức vì có mệnh đề phụ thuộc bắt đầu bằng 'Since'."
    },
    "q3": {
        "a": "❌ Sai! Đây là câu ghép vì có hai mệnh đề độc lập nối với nhau bằng 'and'.",
        "c": "❌ Sai! Đây là câu phức vì có mệnh đề phụ thuộc bắt đầu bằng 'Because'."
    },
    "q4": {
        "b": "❌ Sai! Đây là câu phức vì có mệnh đề phụ thuộc bắt đầu bằng 'Since'.",
        "c": "❌ Sai! Đây là câu đơn vì chỉ có một mệnh đề độc lập."
    },
    "q5": {
        "b": "❌ Sai! Đây là câu ghép vì có hai mệnh đề độc lập nối với nhau bằng 'and'.",
        "c": "❌ Sai! Đây là câu phức vì có mệnh đề phụ thuộc bắt đầu bằng 'Because'."
    },
    "q6": {
        "b": "❌ Sai! Đây là câu phức vì có mệnh đề phụ thuộc bắt đầu bằng 'Since'.",
        "c": "❌ Sai! Đây là câu đơn vì chỉ có một mệnh đề độc lập."
    },
    "q7": {
        "a": "❌ Sai! Đây là câu phức vì có mệnh đề phụ thuộc bắt đầu bằng 'because'.",
        "c": "❌ Sai! Đây là câu ghép vì có hai mệnh đề độc lập nối với nhau bằng 'but'."
    },
    "q8": {
        "b": "❌ Sai! Đây là câu phức vì có mệnh đề phụ thuộc bắt đầu bằng 'Since'.",
        "c": "❌ Sai! Đây là câu đơn vì chỉ có một mệnh đề độc lập."
    },
    "q9": {
        "b": "❌ Sai! Đây là câu phức vì có mệnh đề phụ thuộc bắt đầu bằng 'because'.",
        "c": "❌ Sai! Đây là câu ghép vì có hai mệnh đề độc lập nối với nhau bằng 'and'."
    },
    "q10": {
        "b": "❌ Sai! Đây là câu phức vì có mệnh đề phụ thuộc bắt đầu bằng 'Because'.",
        "c": "❌ Sai! Đây là câu đơn vì chỉ có một mệnh đề độc lập."
    }
};
        resultElement.innerHTML = explanations[question][selectedOption.value];
        resultElement.style.color = "red";
    }
}
