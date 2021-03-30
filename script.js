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
    answers: [
      'a: Douglas Crockford',
      'b: Sheryl Sandberg',
      'c: Brendan Eich',
      'd: Bill Gates',
    ],
    correctAnswer: 'c',
  },

  {
    question: 'Which of the following is NOT a falsey value?',
    answers: ['a: 0', 'b: true', 'c: Null', 'd: undefined'],
    correctAnswer: 'b',
  },
  {
    question: 'In Computer Science, REST stands for what ancronym?',
    answers: [
      'a: Read Every Single Thing',
      'b: Readable Entry Syntax Technology',
      'c: Representational State Transfer',
      'd: Ready-Entry State Terminals',
    ],
    correctAnswer: 'c',
  },
];

// console.log(questionArr);

console.log(questionArr); //  arrays

const test = new Set(questionArr);
console.log(test);

// console.log(questionArr[0].correctAnswer); //  displays answers

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
  // loops through question array
  for (let i = 0; i < questionArr.length; i++) {
    // displays question
    console.log(questionArr[i].question);

    // displays answer
    console.log(questionArr[i].answers);

    // correct answers
    console.log(questionArr[i].correctAnswer);

    questionDisplay.textContent = `Question ${i + 1}) ${
      questionArr[i].question
    }`;

    inputAnswer.textContent = `\n ${questionArr[i].answers}`;
    beginButton.style.display = 'none';
  }

  // question display

  // console.log(question);

  // answer display

  stopBtn.style.display = '';
  answerBtn.style.display = '';
});

answerBtn.addEventListener('click', function () {
  const num = '';

  // displays question in console
  const answer = String(prompt('Type Answer: ').toLowerCase());
  console.log(answer);

  for (const { key, question, answers, correctAnswer } of questionArr) {
    if (answer === correctAnswer) {
      // hides buttons
      answerBtn.style.display = 'none';
      nextBtn.style.display = '';

      // hides element by removing text
      questionDisplay.textContent = '';
      answerCheck.textContent = `Correct! Answer: ${correctAnswer}`;
    } else if (answer != answer) {
      answerCheck.textContent = 'Choose a letter.';
    } else {
      // hides text content if no input
      inputAnswer.textContent = '';
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
