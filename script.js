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

// user inputs

// const quizScore = [];

// function addScore() {
//   for (let i = 0; i < quizScore.push(i); i++) {
//     i = i += quizScore[i];
//     console.log(`${i} of questions.`);
//   }
// }

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

console.log(questionArr); //  arrays

const test = new Set(questionArr);
console.log(test);

// console.log(questionArr[0].correctAnswer); //  displays answers

const questions = questionArr.entries();

// destructure of object + nested objects
// const answers = Object.entries(questionArr);

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
  // loop

  // key values
  const keys = questionArr.keys();
  const arr = questionArr.entries();

  // console.log(arr);
  // console.log(keys);

  // // loops through question array
  // for (let i = 0; i < questionArr.length; i++) {
  //   console.log(questionArr[i].correctAnswer);
  // }

  // question diplay
  for (const [
    key,
    {
      question,
      answers: { a, b, c, d },
      correctAnswer,
    },
  ] of arr) {
    console.log(key);
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
  const entries = questionArr.entries();
  const num = '';

  // displays question in console
  const answer = String(prompt('Type Answer: ').toLowerCase());
  console.log(answer);

  // compares answer
  // console.log(question.get(question.get('correct') === answer));

  // for (const [key, { question, answers, correctAnswer }] of what) {
  //   console.log(correctAnswer);

  // console.log(correctAnswer);

  for (const [key, { question, answers, correctAnswer }] of entries) {
    if (answer === correctAnswer) {
      inputAnswer.textContent = `Correct Answer = ${correctAnswer.toUpperCase()}: ${
        questionArr[key].answers[answer]
      }`;

      console.log(correctAnswer);

      // hides buttons
      answerBtn.style.display = 'none';
      nextBtn.style.display = '';

      // hides element by removing text
      questionDisplay.textContent = '';

      // logs
      console.log('Correct!');
      answerCheck.textContent = 'Correct!';
    } else if (answer != answer) {
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
  console.log('Quiz clear');

  init();
});
//   if (typeof key === 'number') {
//     console.log(`Answer ${key}: ${answer}`);
