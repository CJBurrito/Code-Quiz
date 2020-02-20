var time = document.querySelector(".time");
var questionSpace = document.querySelector(".headQuestion");
var startButton = document.querySelector(".startButton");
var answerList = document.querySelector(".answerList");
var result = document.querySelector(".answerResult")

var timeLeft = 75
var question1 = ["This is a question?", "answer 1", "answer 2", "answer 3", "answer 4"];
var question2 = [];
var question3 = [];
var question4 = [];

function timerStart() {
  var timerInterval = setInterval(function() {
    timeLeft--;
    time.textContent = timeLeft;

    if(timeLeft === 0) {
      clearInterval(timerInterval);
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

function questionChange1() {
  questionSpace.innerHTML = question1[0];
  var answerPool = document.createElement("ul");

  var answer1 = document.createElement("li");
  var button1 = document.createElement("button");
  button1.innerHTML = question1[1];
  answer1.appendChild(button1);

  var answer2 = document.createElement("li");
  var button2 = document.createElement("button");
  button2.innerHTML = question1[2];  
  answer2.appendChild(button2);

  var answer3 = document.createElement("li");
  var button3 = document.createElement("button");
  button3.innerHTML = question1[3];
  answer3.appendChild(button3);

  var answer4 = document.createElement("li");
  var button4 = document.createElement("button");
  button4.innerHTML = question1[4];
  answer4.appendChild(button4);

  answerPool.appendChild(answer1);
  answerPool.appendChild(answer2);
  answerPool.appendChild(answer3);
  answerPool.appendChild(answer4);

  answerList.innerHTML = "";
  answerList.appendChild(answerPool);

  startButton.remove();

  button1.addEventListener("click", function() {incorrectAnswer(); QuestionChange2()});
  button2.addEventListener("click", function() {correctAnswer(); QuestionChange2()});
  button3.addEventListener("click", function() {incorrectAnswer(); QuestionChange2()});
  button4.addEventListener("click", function() {incorrectAnswer(); QuestionChange2()});
};

function QuestionChange2(){
  var UL = document.getElementsByTagName("ul");
  UL.remove();

  questionSpace.innerHTML = question1[0];
  var answerPool = document.createElement("ul");

  var answer1 = document.createElement("li");
  var button1 = document.createElement("button");
  button1.innerHTML = question1[1];
  answer1.appendChild(button1);

  var answer2 = document.createElement("li");
  var button2 = document.createElement("button");
  button2.innerHTML = question1[2];  
  answer2.appendChild(button2);

  var answer3 = document.createElement("li");
  var button3 = document.createElement("button");
  button3.innerHTML = question1[3];
  answer3.appendChild(button3);

  var answer4 = document.createElement("li");
  var button4 = document.createElement("button");
  button4.innerHTML = question1[4];
  answer4.appendChild(button4);

  answerPool.appendChild(answer1);
  answerPool.appendChild(answer2);
  answerPool.appendChild(answer3);
  answerPool.appendChild(answer4);

  answerList.innerHTML = "";
  answerList.appendChild(answerPool);

  startButton.remove();

  button1.addEventListener("click", incorrectAnswer);
  button2.addEventListener("click", correctAnswer);
  button3.addEventListener("click", incorrectAnswer);
  button4.addEventListener("click", incorrectAnswer);

};

//Start Quiz function. Starts quiz questions and timer.
function startQuiz(){
  questionChange1();
  timerStart();

};


startButton.addEventListener("click", startQuiz);
