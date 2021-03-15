// html elements
const beginButton = document.getElementById('begin_btn');
const stopBtn = document.getElementById('stop_btn');
const answerCheck = document.querySelector('.answerCheck');
const questionDisplay = document.querySelector('.quiz');
const inputAnswer = document.getElementById('inputAnswer');

// init
function init() {
  beginButton.style.display = '';
  stopBtn.style.display = 'none';
  inputAnswer.style.display = 'none';
  console.log(stopBtn);
}

init();

//// questions using a Map
// const question = new Map([
//   ['question', 'Which of the following is NOT a Falsey Value?'],
//   [1, '0'],
//   [2, 'Null'],
//   [3, '5'],
//   [4, ''],
//   ['correct', 3],
//   [true, 'Correct!'],
//   [false, 'Try again!'],

//   ['question2', 'What below is an in-line style code, in HTML?'],
//   ['question3', 'What is a great way to learn Code?'],
// ]);

/// Questions Array
const questionArr = [
  {
    question: 'Who invented JavaScript?',
    answers: {
      a: 'Douglas Crockford',
      b: 'Sheryl Sandberg',
      c: 'Brendan Eich',
      d: 'Bill Gates',
    },
    correctAnswer: 'c',
  },

  {
    question: 'Which of the following is NOT a falsey value?',
    answers: {
      a: '0',
      b: 'true',
      c: 'Null',
      d: 'undefined',
    },
    correctAnswer: 'b',
  },

  {
    question: 'In computer science, REST stands for what ancronym?',
    answers: {
      a: 'Read Every Single Thing',
      c: 'Readable Entry Syntax Technology',
      b: 'Representational State Transfer',
      d: 'Ready-Entry State Terminals',
    },
    correctAnswer: 'b',
  },
];

console.log(questionArr);

// console.log(questionArr[0].answers);  displays answers
// console.log(questionArr[0].correctAnswer); //  displays answers

//// Property Name and Value
const what = Object.entries(questionArr);
// console.log(what);

const answers = Object.entries(questionArr);

for (const [key, { question, answers }] of what) {
  console.log();
}

// console.log(
//   `${Number(key) + 1})\n \n ${question}\n \n Choose an answer: \n
// A: ${[a]}\n
// B: ${[b]}\n
// C: ${[c]}\n
// D: ${[d]}`

console.log(answers);

// for (const [
//   key,
//   {
//     question,
//     answers: { a, b, c, d },
//   },
// ] of what) {
//   // console.log(typeof key);

//   console.log(
//     `${Number(key) + 1})\n \n ${question}\n \n Choose an answer: \n
//     A: ${[a]}\n
//     B: ${[b]}\n
//     C: ${[c]}\n
//     D: ${[d]}`
//   );
// }

function nextQuestion() {
  for (const [
    key,
    {
      question,
      answers: { a, b, c, d },
    },
  ] of what) {
    // console.log(typeof key);

    console.log(
      `${Number(key) + 1})\n \n ${question}\n \n Choose an answer: \n
    A: ${[a]}\n
    B: ${[b]}\n
    C: ${[c]}\n
    D: ${[d]}`
    );
  }
}

// nextQuestion();

// Quiz
// console.log(question.get('question'));

// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }

////// events

// Start **BUG**
beginButton.addEventListener('click', function () {
  // button behavior
  questionDisplay.textContent = beginButton.style.display = 'none';
  stopBtn.style.display = '';
  inputAnswer.style.display = '';

  for (const [key, value] of what) {
    if (typeof key === 'number') {
      console.log(`Answer ${key}: ${value}`);
    }
  }
});

// stop
stopBtn.addEventListener('click', function () {
  questionDisplay.style.display = '';
  questionDisplay.textContent = 'Start Quiz';
  answerCheck.textContent = '';

  init();
});

// input answer
inputAnswer.addEventListener('click', function () {
  // displays question in console
  const answer = Number(prompt('Choose your answer:'));
  console.log(answer);

  // compares answer
  console.log(question.get(question.get('correct') === answer));

  answer === 3
    ? (answerCheck.textContent = 'Correct!') +
      (questionDisplay.textContent = '')
    : (answerCheck.textContent = 'Try again!');
});

// const answer = Number(prompt('Your answer?'));
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));
