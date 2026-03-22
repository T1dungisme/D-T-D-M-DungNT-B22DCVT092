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
                "a": "Sai! 'who' chỉ dùng cho người, không phù hợp với 'book'.",
                "c": "Sai! 'where' dùng để chỉ nơi chốn, không phù hợp với 'book'."
            },
            "q2": {
                "a": "Sai! 'which' dùng cho vật, không thể dùng cho người.",
                "c": "Sai! 'whose' diễn tả sở hữu, không phù hợp với câu này."
            },
            "q3": {
                "a": "Sai! 'which' dùng cho vật, không thể dùng cho người.",
                "c": "Sai! 'who' không diễn tả sở hữu, cần dùng 'whose'."
            },
            "q4": {
                "a": "Sai! 'when' chỉ thời gian, nhưng cần đại từ quan hệ chỉ nơi chốn.",
                "c": "Sai! 'which' không phù hợp với địa điểm, cần 'where'."
            },
            "q5": {
                "a": "Sai! 'which' không phù hợp với thời gian, cần 'when'.",
                "c": "Sai! 'where' chỉ nơi chốn, không phù hợp với ngày tháng."
            },
            "q6": {
                "a": "Sai! 'whom' dùng cho tân ngữ, nhưng cần chủ ngữ 'who'.",
                "b": "Sai! 'which' chỉ vật, không phù hợp với người."
            },
            "q7": {
                "a": "Sai! 'who' chỉ người, không phù hợp với địa điểm.",
                "c": "Sai! 'when' chỉ thời gian, nhưng cần đại từ quan hệ nơi chốn."
            },
            "q8": {
                "a": "Sai! 'which' dùng cho vật, không phù hợp với sở hữu của người.",
                "c": "Sai! 'who' không diễn tả sở hữu, cần dùng 'whose'."
            },
            "q9": {
                "b": "Sai! 'where' chỉ nơi chốn, nhưng cần đại từ quan hệ chỉ lý do.",
                "c": "Sai! 'when' chỉ thời gian, không phù hợp với lý do."
            },
            "q10": {
                "a": "Sai! 'which' dùng cho vật, không thể dùng cho người.",
                "c": "Sai! 'whose' diễn tả sở hữu, không phù hợp với câu này."
            }
        };

        resultElement.innerHTML = `❌ ${explanations[question][selectedOption.value]}`;
        resultElement.style.color = "red";
    }
}