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
                "b": "❌ Sai! 'is given' không phù hợp vì câu ở thì quá khứ đơn.",
                "c": "❌ Sai! 'will be given' là thì tương lai, không đúng với 'yesterday'."
            },
            "q2": {
                "a": "❌ Sai! 'was built' là quá khứ, không phù hợp với 'next year'.",
                "b": "❌ Sai! 'is built' là hiện tại đơn, không diễn tả một hành động trong tương lai."
            },
            "q3": {
                "b": "❌ Sai! 'were cleaned' là quá khứ đơn, không đúng với 'right now'.",
                "c": "❌ Sai! 'will be cleaned' là tương lai, không phù hợp với hiện tại tiếp diễn."
            },
            "q4": {
                "a": "❌ Sai! 'was eaten' không diễn tả một hành động xảy ra trước một hành động khác trong quá khứ.",
                "c": "❌ Sai! 'is eaten' là hiện tại đơn, không phù hợp với bối cảnh quá khứ."
            },
            "q5": {
                "b": "❌ Sai! 'was listened to' là quá khứ đơn, không phù hợp với trạng từ 'every day'.",
                "c": "❌ Sai! 'has been listened to' diễn tả hành động tiếp diễn nhưng không phù hợp với 'every day'."
            },
            "q6": {
                "a": "❌ Sai! 'was built' là quá khứ, không phù hợp với 'next year'.",
                "c": "❌ Sai! 'is built' là hiện tại đơn, không diễn tả một hành động xảy ra trong tương lai."
            },
            "q7": {
                "b": "❌ Sai! 'were sent' là quá khứ đơn, không phù hợp với trạng từ 'every morning'.",
                "c": "❌ Sai! 'will be sent' diễn tả tương lai, nhưng câu nói về thói quen hiện tại."
            },
            "q8": {
                "b": "❌ Sai! 'is built' là hiện tại đơn, không phù hợp với 'two years ago'.",
                "c": "❌ Sai! 'will be built' là tương lai, trong khi câu yêu cầu thì quá khứ."
            },
            "q9": {
                "a": "❌ Sai! 'was stolen' là quá khứ đơn, không phù hợp với tình huống giả định.",
                "b": "❌ Sai! 'is stolen' là hiện tại đơn, không phù hợp với câu điều kiện về tương lai."
            },
            "q10": {
                "b": "❌ Sai! 'was cleaned' là quá khứ đơn, không phù hợp với trạng từ chỉ thời gian 'right now'.",
                "c": "❌ Sai! 'has been cleaned' là hiện tại hoàn thành, nhưng không phù hợp với 'right now'."
            }
        };
        
        resultElement.innerHTML = explanations[question][selectedOption.value];
        resultElement.style.color = "red";
    }
}


