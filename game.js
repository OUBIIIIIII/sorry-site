const quizData = [
    {
        question: "What was our first movie together?",
        answers: ["Movie 1", "Movie 2", "Movie 3", "Movie 4"],
        correct: 0
    },
    {
        question: "What's my favorite color?",
        answers: ["Blue", "Green", "Pink", "Yellow"],
        correct: 2
    },
    {
        question: "When is our anniversary?",
        answers: ["Date 1", "Date 2", "Date 3", "Date 4"],
        correct: 1
    }
];

let currentQuestionIndex = 0;

document.getElementById("start-quiz").addEventListener("click", function() {
    document.getElementById("main-content").style.display = "none";
    document.getElementById("quiz-section").style.display = "block";
    displayQuestion();
});

function displayQuestion() {
    const question = quizData[currentQuestionIndex];
    document.getElementById("question").textContent = question.question;
    const answersContainer = document.getElementById("answers");
    answersContainer.innerHTML = "";
    
    question.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.addEventListener("click", () => checkAnswer(index));
        answersContainer.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const question = quizData[currentQuestionIndex];
    if (selectedIndex === question.correct) {
        alert("Correct! 😁");
    } else {
        alert("Oops! Try again! 😅");
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        displayQuestion();
    } else {
        alert("Thank you for the quiz! Let's move forward with a big smile! 💖");
        document.getElementById("quiz-section").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    }
}
