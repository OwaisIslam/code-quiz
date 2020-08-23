var body = document.querySelector("body");
var timer = document.querySelector("#time");
var instructions = document.querySelector(".instructions");
var beginButtonClick = document.querySelector("#beginButton");
var choices = document.querySelector(".choices");
var questionBlock = document.querySelector(".questions");

var buttonAnswerA = document.querySelector("#answer1");
var buttonAnswerB = document.querySelector("#answer2");
var buttonAnswerC = document.querySelector("#answer3");
var buttonAnswerD = document.querySelector("#answer4");

var currentTime = timer.textContent;
var currentQuestion = 0;

var questions = [{
        ask: "Inside which HTML element do we put the JavaScript?",
        answers: ["<script>", "<javascript>", "<js>", "<scripting>"],
        correctAnswer: 0
    },
    {
        ask: "How do you create a function in JavaScript?",
        answers: ["function myFunction()", "function:myFunction()", "function = myFunction()", "func myFunction()"],
        correctAnswer: 0
    },
    {
        ask: "How do you call a function named “myFunction”?",
        answers: ["myFunction", "myFunction()", "call myFunction()", "call function myFunction()"],
        correctAnswer: 1
    },
    {
        ask: "How do you start an IF statement in JavaScript?",
        answers: ["if i = 5", "if i == 5 then", "if i = 5 then", "if (i == 5)"],
        correctAnswer: 3
    },
    {
        ask: "How do you start a FOR loop in JavaScript?",
        answers: ["for i = 1 to 5", "for (i =0; i <= 5; i++)", "for (i <= 5; i++)", "for (i = 0; i <= 5)"],
        correctAnswer: 1
    },
    {
        ask: "How can you add a comment in JavaScript?",
        answers: ["‘This is a comment", "<!--This is a comment -->", "//This is a comment", "**This is a comment**"],
        correctAnswer: 2
    },
    {
        ask: "What is the correct way to write a JavaScript array?",
        answers: ["var colors = (1:”red”, 2:”green”, 3:”blue”)", "var colors = 1 = (“red”), 2 = (“green”), 3 = (“blue”)", "var colors = “red”, ”green”, ”blue”", "var colors = [“red”, “green”, “blue”]"],
        correctAnswer: 3
    },
    {
        ask: "How do you round the number 7.25, to the nearest integer?",
        answers: ["round (7.25)", "Math.rnd(7.25)", "Math.round(7.25)", "rnd(7.25)"],
        correctAnswer: 2
    },
    {
        ask: "What event occurs when the user clicks on an HTML element?",
        answers: ["onmouseclick", "onchange", "onmouseover", "onclick"],
        correctAnswer: 3
    },
    {
        ask: "How do you declare a JavaScript variable?",
        answers: ["v carName;", "var carName;", "variable carName;", "v (carName);"],
        correctAnswer: 1
    },
    {
        ask: "Which operator is used to assign a value to a variable?",
        answers: ["x", "*", "-", "="],
        correctAnswer: 3
    }
]

var quizQuestion = function () {
    if (currentQuestion < questions.length) {
        var questionP = document.querySelector(".question");

        questionP.textContent = questions[currentQuestion].ask;

        buttonAnswerA.textContent = questions[currentQuestion].answers[0];
        buttonAnswerB.textContent = questions[currentQuestion].answers[1];
        buttonAnswerC.textContent = questions[currentQuestion].answers[2];
        buttonAnswerD.textContent = questions[currentQuestion].answers[3];
    }
    else {
        endGame();
    }
}

var checkAnswer = function () {
    console.log("you clicked " + this.textContent);

    if ((this.textContent) == (questions[currentQuestion].answers[questions[currentQuestion].correctAnswer])) {
        console.log("correct");
    }

    currentQuestion++;

    quizQuestion();
}

var endGame = function () {
    questionBlock.style.display = "none";
}

beginButtonClick.addEventListener("click", function () {
    var timerStart = setInterval(function () {
        currentTime--;
        timer.textContent = currentTime;
        if (currentTime == 0) {
            clearInterval(timerStart);
        }
    }, 1000)

    instructions.style.display = "none";
    choices.style.display = "flex";

    quizQuestion();
})

buttonAnswerA.addEventListener("click", checkAnswer);
buttonAnswerB.addEventListener("click", checkAnswer);
buttonAnswerC.addEventListener("click", checkAnswer);
buttonAnswerD.addEventListener("click", checkAnswer);