// html elements
const beginButton = document.getElementById('begin_btn');
const stopBtn = document.getElementById('stop_btn');
const answerCheck = document.querySelector('.answerCheck');
const questionDisplay = document.querySelector('.quiz');
const inputAnswer = document.querySelector('.answers');
const answerBtn = document.getElementById('input');
const nextBtn = document.getElementById('next');

// init
function init() {
  beginButton.style.display = '';
  stopBtn.style.display = 'none';
  answerBtn.style.display = 'none';
  nextBtn.style.display = 'none';
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

// console.log(questionArr);

console.log(questionArr); //  displays answers
// console.log(questionArr[0].correctAnswer); //  displays answers

const questions = questionArr.entries();

// destructure of object + nested objects
const answers = Object.entries(questionArr);

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
  const keys = questionArr.keys();
  const arr = questionArr.entries();

  // console.log(arr);
  // console.log(keys);

  // question diplay
  for (const [
    key,
    {
      question,
      answers: { a, b, c, d },
    },
  ] of arr) {
    // console.log(key);
    // console.log(question);

    // answer display
    questionDisplay.textContent = `Question ${key + 1}. ${question} `;
    inputAnswer.textContent = `A: (${a})\n B: (${b})\n C: (${c})\n D: (${d})\n`;
  }

  beginButton.style.display = 'none';

  stopBtn.style.display = '';

  answerBtn.style.display = '';
});

answerBtn.addEventListener('click', function () {
  const entry = questionArr.entries();
  const num = '';

  // displays question in console
  const answer = String(prompt('Type Answer: ').toLowerCase());
  console.log(answer);

  // compares answer
  // console.log(question.get(question.get('correct') === answer));

  // for (const [key, { question, answers, correctAnswer }] of what) {
  //   console.log(correctAnswer);

  // console.log(correctAnswer);

  for (const [
    key,
    {
      question,
      answers: { a, b, c, d },
      correctAnswer,
    },
  ] of entry) {
    if (answer === correctAnswer) {
      console.log('Correct!');
      answerCheck.textContent = 'Correct!';
      questionDisplay.textContent = '';

      for (let i = 0; i < questionArr.length; i++)
        inputAnswer.textContent = `Correct Answer: ${correctAnswer.toUpperCase()}`;

      answerBtn.style.display = 'none';
      nextBtn.style.display = '';
    } else if (answer != String) {
      answerCheck.textContent = 'Choose a letter.';
    } else {
      answerCheck.textContent = 'Try Again!';
    }
  }
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
//   if (typeof key === 'number') {
//     console.log(`Answer ${key}: ${answer}`);
