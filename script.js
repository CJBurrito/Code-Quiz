var time = document.querySelector(".time");
var intro = document.querySelector(".intro");
var introBody = document.querySelector(".introBody");
var question1 = document.querySelector(".question1")
var question1Body = document.querySelector(".question1Body")
var question2 = document.querySelector(".question1")
var question2Body = document.querySelector(".question1Body")
var question3 = document.querySelector(".question1")
var question3Body = document.querySelector(".question1Body")
var question4 = document.querySelector(".question1")
var question4Body = document.querySelector(".question1Body")
var startButton = document.querySelector(".startButton");
var gameover = document.querySelector(".gameover");
var gameoverBody = document.querySelector(".gameoverBody");
var result = document.querySelector(".answerResult");
var button = document.querySelectorAll("button");

console.log(button);
console.log(intro);
console.log(question1);

var timeLeft = 0

function timerStart() {
  timeLeft += 10;
  var timerInterval = setInterval(function() {
    timeLeft--;
    time.textContent = timeLeft;

    if(timeLeft <= 0) {
      clearInterval(timerInterval);
      gameOver();
    }

  }, 1000);
}

 function correctAnswer() {
  timeLeft = timeLeft + 10;
  result.innerHTML = "Correct!"
  setTimeout(function() 
    { result.innerHTML = ""; }, 
    3000);
}

function incorrectAnswer() {
  timeLeft = timeLeft - 10
  result.innerHTML = "Incorrect!"
  setTimeout(function() 
    { result.innerHTML = ""; }, 
    3000);
}

function questionChange(item) {
  console.log(this);

if (item.classList.contains("correct")) {
  correctAnswer();
}

else {
  incorrectAnswer();
}};

function hideQuestions() {
  question1.hidden = true;
  question1Body.hidden = true;
  question2.hidden = true;
  question2Body.hidden = true;
  question3.hidden = true;
  question3Body.hidden = true;
  question4.hidden = true;
  question4Body.hidden = true;
  gameover.hidden = true;
  gameoverBody.hidden = true;
}

function gameOver() {
  timeLeft = 0;
  hideQuestions();
  gameover.hidden = false;
  gameoverBody.hidden = false;
  startButton.hidden = false;
}

//Start Quiz function. Starts quiz questions and timer.
function startQuiz(){
  intro.hidden = true;
  introBody.hidden = true;
  startButton.hidden = true;
  hideQuestions();

  console.log(intro);
  console.log(introBody);

  question1.hidden = false;
  question1Body.hidden = false;

  //button.forEach(function (button){addEventListener("click", questionChange(this))});

  timerStart();
};


startButton.addEventListener("click", startQuiz);
