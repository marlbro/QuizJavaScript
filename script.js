// html elements
const beginButton = document.getElementById('begin_btn');
const stopBtn = document.getElementById('stop_btn');
const answerCheck = document.querySelector('.answerCheck');
const questionDisplay = document.querySelector('.quiz');
const inputAnswer = document.querySelector('.answers');
const answerBtn = document.getElementById('input');

// init
function init() {
  beginButton.style.display = '';
  stopBtn.style.display = 'none';
  answerBtn.style.display = 'none';
  // console.log(stopBtn);
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
    question: 'In Computer Science, REST stands for what ancronym?',
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

// destructure of object + nested objects
const answers = Object.entries(questionArr);

for (const [key, { question, answers }] of what) {
  // console.log(answers);
}

// console.log(
//   `${Number(key) + 1})\n \n ${question}\n \n Choose an answer: \n
// A: ${[a]}\n
// B: ${[b]}\n
// C: ${[c]}\n
// D: ${[d]}`

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

// function nextQuestion() {
//   for (const [
//     key,
//     {
//       question,
//       answers: { a, b, c, d },
//     },
//   ] of what) {
//     // console.log(typeof key);

//     console.log(
//       `${Number(key) + 1})\n \n ${question}\n \n Choose an answer: \n
//     A: ${[a]}\n
//     B: ${[b]}\n
//     C: ${[c]}\n
//     D: ${[d]}`
//     );
//   }
// }

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
  // key values

  const entry = questionArr.entries();

  // question diplay
  for (const [
    key,
    {
      question,
      answers: { a, b, c, d },
    },
  ] of entry) {
    // console.log(key);
    questionDisplay.textContent = `Question ${
      Number(key) + 1
    }. \n ${question} \n`;

    console.log(answers);

    (inputAnswer.textContent = `a: ${a}, b: ${b}, c: ${c}, d: ${d}`) +
      ' ' +
      `Click 'Answer' and type in your answer.`;
  }

  beginButton.style.display = 'none';

  stopBtn.style.display = '';

  answerBtn.style.display = '';
});
// // questions array
// for (const [key, { question, answer }] of what) {
//   if (typeof key === 'number') {
//     console.log(`Answer ${key}: ${answer}`);

answerBtn.addEventListener('click', function () {
  const entry = questionArr.entries();

  // displays question in console
  const answer = String(prompt('Type Answer: ')).toLowerCase;
  console.log(answer);

  // compares answer
  // console.log(question.get(question.get('correct') === answer));

  // for (const [key, { question, answers, correctAnswer }] of what) {
  //   console.log(correctAnswer);

  for (const [
    key,
    {
      question,
      answers: { a, b, c, d },
      correctAnswer,
    },
  ] of entry)
    answers === correctAnswer
      ? (answerCheck.textContent = 'Correct!') +
        (questionDisplay.textContent = '')
      : (answerCheck.textContent = 'Try again!');
  // nextQuestion();
});

// const answer = Number(prompt('Your answer?'));
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));
// });

// stop
stopBtn.addEventListener('click', function () {
  questionDisplay.style.display = '';
  questionDisplay.textContent = '';
  answerCheck.textContent = '';
  inputAnswer.textContent = '';

  init();
});

// input answer
