const formQuiz = document.querySelector(".quiz-form");
const submitBtn = document.querySelector(".submit-btn");
const outputScore = document.querySelector(".output-score")

const answers = ["obtuse", "60", "equilateral", "isoceles", "acute"];

submitBtn.addEventListener("click", calculateScore);


function calculateScore() {
    const formAnswer = new FormData(formQuiz);
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
        console.log(score);
    }
    else {
        console.log("Please answer all questions");
    }
}