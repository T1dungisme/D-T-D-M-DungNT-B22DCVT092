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
                "b": "❌ Sai! 'rained' không phù hợp với câu điều kiện loại 1.",
                "c": "❌ Sai! 'will rain' không được dùng trong mệnh đề if của câu điều kiện loại 1."
            },
            "q2": {
                "a": "❌ Sai! Trong câu điều kiện loại 2, ta dùng 'were' cho tất cả các ngôi.",
                "c": "❌ Sai! 'was' không được dùng trong câu điều kiện loại 2."
            },
            "q3": {
                "a": "❌ Sai! 'gets' là hiện tại đơn, không phù hợp với câu điều kiện loại 2.",
                "c": "❌ Sai! 'had got' là quá khứ hoàn thành, không phù hợp với câu điều kiện loại 2."
            },
            "q4": {
                "a": "❌ Sai! 'will pass' không phù hợp vì câu là điều kiện loại 3.",
                "c": "❌ Sai! 'would pass' chỉ dùng cho câu điều kiện loại 2."
            },
            "q5": {
                "a": "❌ Sai! 'have had' là hiện tại hoàn thành, không đúng với câu điều kiện loại 3.",
                "b": "❌ Sai! 'had' chưa đủ để diễn tả điều kiện loại 3, cần 'had had'."
            },
            "q6": {
                "a": "❌ Sai! 'buy' là hiện tại đơn, không đúng với câu điều kiện loại 2.",
                "b": "❌ Sai! 'bought' không đi kèm 'would' trong mệnh đề chính của điều kiện loại 2."
            },
            "q7": {
                "b": "❌ Sai! 'brought' là quá khứ đơn, không phù hợp với câu điều kiện loại 1.",
                "c": "❌ Sai! 'will bring' không được dùng trong mệnh đề if của câu điều kiện loại 1."
            },
            "q8": {
                "a": "❌ Sai! 'is' không phù hợp với câu điều kiện loại 3.",
                "b": "❌ Sai! 'was' không đủ để diễn tả một giả định trong quá khứ."
            },
            "q9": {
                "a": "❌ Sai! 'have' là hiện tại đơn, không phù hợp với câu điều kiện loại 2.",
                "c": "❌ Sai! 'will have' không được dùng trong câu điều kiện loại 2."
            },
            "q10": {
                "a": "❌ Sai! 'leave' là hiện tại đơn, không phù hợp với câu điều kiện loại 3.",
                "b": "❌ Sai! 'left' không đủ để diễn tả một hành động đã xảy ra trước một hành động khác trong quá khứ."
            }
        };
        
        resultElement.innerHTML = explanations[question][selectedOption.value];
        resultElement.style.color = "red";
    }
}
