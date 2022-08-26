const formQuiz = document.querySelector(".quiz-form");
const submitBtn = document.querySelector(".submit-btn");
const outputScore = document.querySelector(".output-score")

const answers = ["obtuse", "60", "equilateral", "isoceles", "acute"];

submitBtn.addEventListener("click", calculateScore);


function calculateScore() {
    const formAnswer = new FormData(formQuiz);
    outputScore.style.fontWeight = "bold";
    let score = 0, quizAnswered = 0;
    const userAnswers = [];
    for (let values of formAnswer.values()) {
        if (values) {quizAnswered++};
        userAnswers.push(values);
    }

    if (quizAnswered === 5) {
        for (let index in userAnswers) {
            if (userAnswers[index] === answers[index]) {
                score++;
            }    
        }
        outputScore.innerText = "Your score is: " + score;
        outputScore.style.color = "green";
    }
    else {
        outputScore.innerText = "You must play the whole quiz for the score.";
        outputScore.style.color = "red";
    }
}