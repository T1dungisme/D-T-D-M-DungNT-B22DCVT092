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
                "b": "❌ Sai! 'didn't you' không phù hợp vì câu ở hiện tại đơn.",
                "c": "❌ Sai! 'won't you' là tương lai, không phù hợp với câu hiện tại."
            },
            "q2": {
                "b": "❌ Sai! 'didn't she' không đúng vì câu hỏi đuôi phải là khẳng định khi mệnh đề chính phủ định.",
                "c": "❌ Sai! 'does she' không phù hợp với thì quá khứ đơn."
            },
            "q3": {
                "b": "❌ Sai! 'didn't they' không phù hợp với thì hiện tại hoàn thành.",
                "c": "❌ Sai! 'don't they' không phù hợp với cấu trúc câu hỏi đuôi của thì hiện tại hoàn thành."
            },
            "q4": {
                "b": "❌ Sai! 'do we' không phù hợp với câu bắt đầu bằng 'Let's'.",
                "c": "❌ Sai! 'can we' không phải là dạng câu hỏi đuôi phù hợp với 'Let's'."
            },
            "q5": {
                "b": "❌ Sai! 'isn't there' không phù hợp vì mệnh đề chính phủ định, câu đuôi phải khẳng định.",
                "c": "❌ Sai! 'does there' không phù hợp với cấu trúc câu hỏi đuôi của 'There isn't'."
            },
            "q6": {
                "a": "❌ Sai! 'hasn't he' không phù hợp với động từ khuyết thiếu 'has to'.",
                "c": "❌ Sai! 'isn't he' không phù hợp với cấu trúc của động từ khuyết thiếu."
            },
            "q7": {
                "b": "❌ Sai! 'doesn't she' không phù hợp với động từ khuyết thiếu 'can'.",
                "c": "❌ Sai! 'hasn't she' không phù hợp với câu hỏi đuôi của động từ khuyết thiếu."
            },
            "q8": {
                "a": "❌ Sai! 'don't we' không phù hợp vì câu chính dùng động từ khuyết thiếu 'should'.",
                "b": "❌ Sai! 'should we' không phù hợp vì câu hỏi đuôi cần là phủ định khi câu chính khẳng định."
            },
            "q9": {
                "b": "❌ Sai! 'doesn't he' không phù hợp vì mệnh đề chính có trạng từ phủ định 'never'.",
                "c": "❌ Sai! 'did he' không phù hợp vì câu chính ở hiện tại đơn."
            },
            "q10": {
                "a": "❌ Sai! 'am I' không phù hợp vì cấu trúc đặc biệt của câu hỏi đuôi với 'I am'.",
                "c": "❌ Sai! 'isn't I' không phải là cấu trúc đúng của câu hỏi đuôi."
            }
        };
        
        resultElement.innerHTML = explanations[question][selectedOption.value];
        resultElement.style.color = "red";
    }
}
