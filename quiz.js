const quizData = [
  {
    question: "Which is what number 1",
    a: "Wrong answer num 1",
    b: "Wrong answer num 2",
    c: "Wrong answer num 3",
    d: "Wrong answer num 4",
    correct: "a",
  },
  {
    question: "Which is what number 2",
    a: "Wrong answer num 1.2",
    b: "Wrong answer num 2.2",
    c: "Wrong answer num 3.2",
    d: "Wrong answer num 4.2",
    correct: "b",
  },
  {
    question: "Which is what number 3",
    a: "Wrong answer num 1.3",
    b: "Wrong answer num 2.3",
    c: "Wrong answer num 3.3",
    d: "Wrong answer num 4.3",
    correct: "c",
  },
  {
    question: "Which is what number 4",
    a: "Wrong answer num 1.4",
    b: "Wrong answer num 2.4",
    c: "Wrong answer num 3.4",
    d: "Wrong answer num 4.4",
    correct: "d",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswer();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswer() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} question correctly</h2>
            <button onclick = "location.reload()">Reload</button>
            `;
    }
  }
});
