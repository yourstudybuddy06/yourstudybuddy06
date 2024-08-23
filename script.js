const correctAnswers = {
    q1: 'B',
    q2: 'C',
    q3: 'A',
    q4: 'C',
    q5: 'D',
    q6: 'A',
    q7: 'B',
    q8: 'D',
    q9: 'E',
    q10: 'B'
};

function checkAnswers() {
    const form = document.getElementById('quizForm');
    let feedback = '';
    let score = 0;

    Object.keys(correctAnswers).forEach((question, index) => {
        const userAnswer = form[question].value;
        const correctAnswer = correctAnswers[question];
        const isCorrect = userAnswer === correctAnswer;

        feedback += `<p>${index + 1}. ${isCorrect ? '<span class="correct">✔ Correct!</span>' : '<span class="incorrect">✖ Incorrect!</span>'}</p>`;
        if (isCorrect) score++;
    });

    const result = document.getElementById('quizFeedback');
    result.innerHTML = feedback;

    if (score === Object.keys(correctAnswers).length) {
        result.innerHTML += '<p class="correct">Congratulations! You got all the answers correct!</p>';
    } else {
        result.innerHTML += `<p>You got ${score} out of ${Object.keys(correctAnswers).length} correct. Try again!</p>`;
    }
}
