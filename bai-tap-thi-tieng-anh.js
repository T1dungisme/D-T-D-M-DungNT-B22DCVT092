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
                "a": "Sai! 'go' không dùng với chủ ngữ 'She' trong thì hiện tại đơn.",
                "c": "Sai! 'going' không thể đứng một mình mà không có trợ động từ."
            },
            "q2": {
                "a": "Sai! 'watch' không phù hợp vì câu đang diễn tả hành động xảy ra ngay bây giờ.",
                "b": "Sai! 'watched' là thì quá khứ đơn, không phù hợp với câu có từ 'Right now'."
            },
            "q3": {
                "b": "Sai! 'watches' chỉ dùng cho chủ ngữ số ít trong thì hiện tại đơn.",
                "c": "Sai! 'watch' không phù hợp với câu chỉ tương lai."
            },
            "q4": {
                "a": "Sai! 'will graduate' chỉ hành động tương lai đơn, chưa thể hiện hoàn thành.",
                "c": "Sai! 'graduates' dùng trong hiện tại đơn, không phù hợp ở đây."
            },
            "q5": {
                "a": "Sai! 'read' ở đây là hiện tại đơn, không đúng vì hành động đã xảy ra nhiều lần.",
                "c": "Sai! 'am reading' diễn tả hành động đang diễn ra, không phù hợp với câu này."
            },
            "q6": {
                "a": "Sai! 'lives' là thì hiện tại, nhưng câu cần một thì quá khứ hoàn thành.",
                "b": "Sai! 'has lived' là hiện tại hoàn thành, không phù hợp vì hành động đã hoàn tất trước quá khứ."
            },
            "q7": {
                "a": "Sai! 'snows' chỉ dùng cho hiện tại đơn, không mô tả hành động đang diễn ra.",
                "b": "Sai! 'has snowed' chỉ hành động đã xảy ra, không phù hợp với từ 'Look!'."
            },
            "q8": {
                "b": "Sai! 'is already starting' không đúng vì diễn tả tương lai gần.",
                "c": "Sai! 'already starts' không phù hợp vì cần một thì hoàn thành."
            },
            "q9": {
                "a": "Sai! 'will lie' là tương lai đơn, nhưng câu cần một thì tiếp diễn.",
                "b": "Sai! 'are lying' không thể hiện rõ thời điểm trong tương lai."
            },
            "q10": {
                "a": "Sai! 'works' là hiện tại đơn, không thể diễn tả hành động từ năm 2010 đến nay.",
                "b": "Sai! 'worked' là quá khứ đơn, nhưng câu cần hiện tại hoàn thành."
            }
        };

        resultElement.innerHTML = `❌ ${explanations[question][selectedOption.value]}`;
        resultElement.style.color = "red";
    }
}
