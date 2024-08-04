const questions = [
  {
    id: 1,
    question: "'OS' computer abbreviation usually means ?",
    answers: [
      { text: "Order of Significance", correct: false },
      { text: "Open Software", correct: false },
      { text: "Operating System", correct: true },
      { text: "Optical Sensor", correct: false },
    ],
  },
  {
    id: 2,
    question: "'.MOV' extension refers usually to what kind of file?",

    answers: [
      { text: "Image File", correct: false },
      { text: "Animation/Movie File", correct: true },
      { text: "Audio File", correct: false },
      { text: "MS Office Document", correct: false },
    ],
  },
  {
    id: 3,
    question:
      "Most modern TV's draw power even if turned off. The circuit the power is used in does what function?",

    answers: [
      { text: "Sound", correct: false },
      { text: "Remote Control", correct: true },
      { text: "Color Balance", correct: false },
      { text: "High Voltage", correct: false },
    ],
  },
  {
    id: 4,
    question: "Who developed Yahoo?",

    answers: [
      { text: "Dennis Ritchie & Ken Thompson", correct: false },
      { text: "Vint Cerf & Robert Kahn", correct: false },
      { text: "David Filo & Jerry Yang", correct: true },
      { text: "Steve Case & Jeff Bezos", correct: false },
    ],
  },
  {
    id: 5,
    question: "JavaScript File Has An Extension of?",

    answers: [
      { text: ".Java", correct: false },
      { text: ".js", correct: true },
      { text: ".Javacript", correct: false },
      { text: ".xml", correct: false },
    ],
  },
  {
    id: 6,
    question: "Inside which HTML element do we put the JavaScript?",

    answers: [
      { text: "Js", correct: false },
      { text: "Javascript", correct: false },
      { text: "scripting", correct: false },
      { text: "Script", correct: true },
    ],
  },
  {
    id: 7,
    question: "GetMonth() returns The Month as",

    answers: [
      { text: "Int", correct: true },
      { text: "Float", correct: false },
      { text: "Char", correct: false },
      { text: "String", correct: false },
    ],
  },
  {
    id: 8,
    question: "Function is Used To Parse a String To Int is ?",

    answers: [
      { text: "Integer.Parse", correct: false },
      { text: "Int.Parse", correct: true },
      { text: "Parse.Int", correct: false },
      { text: "None ", correct: false },
    ],
  },
  {
    id: 9,
    question:
      "Which Of The Dialog Box Display a Message And a Data Entry Field ?",
    answers: [
      { text: "Msg()", correct: false },
      { text: "Confirm()", correct: false },
      { text: "Msg()", correct: false },
      { text: "Prompt()", correct: true },
    ],
  },
  {
    id: 10,
    question:
      "Which built-in method returns the index within the calling String object of the first occurrence of the specified value ?",

    answers: [
      { text: "getIndex()", correct: false },
      { text: "location()", correct: false },
      { text: "indexOf()", correct: true },
      { text: "None of the above", correct: false },
    ],
  },
  {
    id: 11,
    question:
      "Which built-in method returns the calling string value converted to upper case ?",

    answers: [
      { text: "toUpperCase()", correct: true },
      { text: "toUpper()", correct: false },
      { text: "changeCase(case)", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const questionCount = document.querySelector("#question-Count");
const yourScore = document.querySelector(".your-score");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;

  showQuestion();
}

function showQuestion() {
  numberOfQst();
  scoreDisplay();
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}
function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `Your Scored ${score} / ${questions.length}`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
  yourScore.style.display = "none";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

function numberOfQst() {
  questionCount.innerHTML = `${currentQuestionIndex + 1} of ${
    questions.length
  }`;
}

function scoreDisplay() {
  yourScore.innerHTML = `Your Current Score is ${score} / ${questions.length}`;
}

startQuiz();
