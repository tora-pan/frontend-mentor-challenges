let questionText = document.getElementById('question-text');
let answer1 = document.getElementById('answer-button-1');
let answer2 = document.getElementById('answer-button-2');
let answer3 = document.getElementById('answer-button-3');
let answer4 = document.getElementById('answer-button-4');

console.log(answer1.textContent);

let currentQuestion = 0;

const programmingQuestions = [
    {
        question: 'What does HTML stand for?',
        answers: [
            'Hypertext Markup Language',
            'Hyperlink and Text Markup Language',
            'Home Tool Markup Language',
            'Hypertext and Text Markup Language',
        ],
        correctAnswerIndex: 0,
    },
    {
        question:
            "Which programming language is known as the 'mother of all languages'?",
        answers: ['C', 'Java', 'Assembly', 'Fortran'],
        correctAnswerIndex: 2,
    },
    {
        question: 'What is the purpose of CSS?',
        answers: [
            'To create dynamic web pages',
            'To style HTML elements',
            'To perform server-side scripting',
            'To handle database operations',
        ],
        correctAnswerIndex: 1,
    },
    {
        question: "What does the acronym 'API' stand for?",
        answers: [
            'Application Programming Interface',
            'Advanced Programming Interface',
            'Automated Processing Interface',
            'Application Process Integration',
        ],
        correctAnswerIndex: 0,
    },
    {
        question: 'In JavaScript, what is a closure?',
        answers: [
            'A way to declare variables',
            'A block of code',
            'A function that has access to variables in its lexical scope',
            'A loop statement',
        ],
        correctAnswerIndex: 2,
    },
    {
        question:
            'Which version control system is commonly used in software development?',
        answers: ['SVN', 'Git', 'Mercurial', 'Perforce'],
        correctAnswerIndex: 1,
    },
    {
        question: "What is the purpose of the 'npm' command in Node.js?",
        answers: [
            'To install new packages',
            'To print the current working directory',
            'To execute a JavaScript file',
            'To create a new Node.js project',
        ],
        correctAnswerIndex: 0,
    },
    {
        question: 'What is the primary function of a database?',
        answers: [
            'To create user interfaces',
            'To store and manage data',
            'To perform mathematical calculations',
            'To design web pages',
        ],
        correctAnswerIndex: 1,
    },
    {
        question: 'What is the main advantage of using responsive web design?',
        answers: [
            'Faster page load times',
            'Improved search engine optimization',
            'Consistent user experience across devices',
            'Enhanced server security',
        ],
        correctAnswerIndex: 2,
    },
    {
        question: "What does the acronym 'SQL' stand for?",
        answers: [
            'Structured Query Language',
            'Sequential Query Language',
            'Simple Question Language',
            'Server Query Language',
        ],
        correctAnswerIndex: 0,
    },
];

const addStartButton = () => {
    const btnPlaceholder = document.getElementById('btn-placeholder');
    if (btnPlaceholder.firstChild) {
        btnPlaceholder.removeChild(btnPlaceholder.firstChild);
    }
    const button = document.createElement('button');
    button.classList.add('btn');

    if (currentQuestion === 0) {
        button.textContent = 'Start Quiz';
        button.addEventListener('click', startQuiz);
    } else {
        button.textContent = 'Restart Quiz';
        button.addEventListener('click', restartQuiz);
    }
    btnPlaceholder.appendChild(button);
};

const restartQuiz = () => {
    currentQuestion = 0;
    startQuiz();
};

const startQuiz = () => {
    questionText.textContent = programmingQuestions[currentQuestion].question;
    answer1.textContent = programmingQuestions[currentQuestion].answers[0];
    answer2.textContent = programmingQuestions[currentQuestion].answers[1];
    answer3.textContent = programmingQuestions[currentQuestion].answers[2];
    answer4.textContent = programmingQuestions[currentQuestion].answers[3];
};
const clickedCorrectAnswer = (answerBtn) => {
    const correctAnswer = document.getElementById(
        `answer-button-${answerBtn + 1}`,
    );
    correctAnswer.classList.add('correct');
    currentQuestion++;
    setTimeout(() => {
        startQuiz();
        correctAnswer.classList.remove('correct');
    }, 1000);
};
const clickedWrongAnswer = (answerBtn) => {
    const wrongAnswer = document.getElementById(
        `answer-button-${answerBtn + 1}`,
    );
    wrongAnswer.classList.add('incorrect');
    currentQuestion++;
    setTimeout(() => {
        startQuiz();
        wrongAnswer.classList.remove('incorrect');
    }, 2000);
};
const checkAnswer = (answerBtn) => {
    if (
        programmingQuestions[currentQuestion].correctAnswerIndex === answerBtn
    ) {
        clickedCorrectAnswer(answerBtn);
    } else {
        clickedWrongAnswer(answerBtn);
    }
};

document.addEventListener('DOMContentLoaded', function () {
    addStartButton();
});
