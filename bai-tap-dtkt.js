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
                "a": "❌ Sai! 'Can' diễn tả khả năng nhưng không phù hợp trong ngữ cảnh này.",
                "c": "❌ Sai! 'May' thường dùng để xin phép, không phù hợp với câu yêu cầu."
            },
            "q2": {
                "a": "❌ Sai! 'Can' diễn tả khả năng hiện tại, nhưng câu đang nói về quá khứ.",
                "c": "❌ Sai! 'Must' thể hiện sự bắt buộc, không phù hợp ở đây."
            },
            "q3": {
                "b": "❌ Sai! 'Must' diễn tả sự bắt buộc, nhưng đây chỉ là một lời khuyên.",
                "c": "❌ Sai! 'Can' diễn tả khả năng, không phù hợp trong ngữ cảnh này."
            },
            "q4": {
                "a": "❌ Sai! 'Might' diễn tả sự không chắc chắn, nhưng câu này là một lời khuyên rõ ràng.",
                "c": "❌ Sai! 'Could' diễn tả khả năng trong quá khứ, không phù hợp ở đây."
            },
            "q5": {
                "b": "❌ Sai! 'Must' diễn tả sự khẳng định mạnh, nhưng câu này đang phủ định khả năng.",
                "c": "❌ Sai! 'Should' diễn tả lời khuyên, không phù hợp trong câu này."
            },
            "q6": {
                "b": "❌ Sai! 'Must' diễn tả sự bắt buộc, nhưng câu này chỉ đang nói về khả năng.",
                "c": "❌ Sai! 'Should' chỉ lời khuyên, không phù hợp với câu này."
            },
            "q7": {
                "b": "❌ Sai! 'Shouldn't' chỉ lời khuyên, nhưng câu này là một quy định nghiêm cấm.",
                "c": "❌ Sai! 'Don't have to' diễn tả sự không bắt buộc, không phù hợp trong ngữ cảnh này."
            },
            "q8": {
                "b": "❌ Sai! 'Should' chỉ lời khuyên, nhưng câu này nói về sự bắt buộc.",
                "c": "❌ Sai! 'May' diễn tả khả năng, không phù hợp với nghĩa của câu."
            },
            "q9": {
                "a": "❌ Sai! 'Must' thể hiện sự chắc chắn cao, nhưng câu này chỉ là một phỏng đoán.",
                "c": "❌ Sai! 'Have to' diễn tả sự bắt buộc, không phù hợp với nghĩa của câu."
            },
            "q10": {
                "b": "❌ Sai! 'Must' diễn tả sự bắt buộc, không phù hợp với câu này.",
                "c": "❌ Sai! 'Has to' sai về mặt ngữ pháp vì chủ ngữ là 'I'."
            }
        };

        resultElement.innerHTML = explanations[question][selectedOption.value];
        resultElement.style.color = "red";
    }
}
