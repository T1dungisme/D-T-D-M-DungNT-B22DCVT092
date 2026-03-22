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
            "a": " Sai! 'studies' chỉ dùng khi chủ ngữ là ngôi thứ 3 số ít ở hiện tại.",
            "b": " Sai! 'studied' không phù hợp vì động từ cần lùi thì sang 'was studying'.",
        },
        "q2": {
            "a": " Sai! 'like' là thì hiện tại đơn, nhưng câu gián tiếp cần lùi thì.",
            "c": " Sai! 'had liked' không phù hợp vì câu không yêu cầu thì quá khứ hoàn thành."
        },
        "q3": {
            "a": " Sai! 'visit' là hiện tại, nhưng cần lùi thì trong câu gián tiếp.",
            "b": " Sai! 'visited' chưa đủ vì câu cần lùi về quá khứ hoàn thành.",
        },
        "q4": {
            "a": " Sai! 'will call' không lùi thì trong câu gián tiếp.",
            "c": " Sai! 'had called' sai vì không phải quá khứ hoàn thành."
        },
        "q5": {
            "a": " Sai! 'live' là thì hiện tại, không phù hợp trong câu gián tiếp.",
            "c": " Sai! 'had lived' không phù hợp vì không có dấu hiệu của quá khứ hoàn thành."
        },
        "q6": {
            "b": " Sai! 'can' không thay đổi sẽ sai trong câu gián tiếp.",
            "c": " Sai! 'will' không liên quan đến nghĩa của câu."
        },
        "q7": {
            "a": " Sai! 'am' không phù hợp vì câu đã lùi thì.",
            "c": " Sai! 'were' không phù hợp với chủ ngữ số ít 'I'."
        },
        "q8": {
            "a": " Sai! 'finish' không phù hợp vì cần lùi thì.",
            "b": " Sai! 'finished' chưa đủ, phải là quá khứ hoàn thành.",
        },
        "q9": {
            "a": " Sai! 'must' thường lùi thì thành 'had to'.",
            "c": " Sai! 'have to' không phù hợp với cấu trúc lùi thì."
        },
        "q10": {
            "a": " Sai! 'see' là hiện tại, cần lùi thì.",
            "b": " Sai! 'saw' là quá khứ đơn nhưng cần quá khứ hoàn thành.",
        }
        };

        resultElement.innerHTML = `❌ ${explanations[question][selectedOption.value]}`;
        resultElement.style.color = "red";
    }
}
