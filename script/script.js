const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            {text: "Hyper Text Markup Language", correct: true},
            {text: "Hyperlink and Text Markup Language", correct: false},
            {text: "High-Level Text Markup Language", correct: false},
            {text: "Hyper Transfer Markup Language", correct: false},
        ]
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        answers: [
            {text: "link", correct: false},
            {text: "a", correct: true},
            {text: "hlink", correct: false},
            {text: "url", correct: false},
        ]
    },
    {
        question: "What does CSS stand for?",
        answers: [
            {text: "Computer Style Sheets", correct: false},
            {text: "Creative Style Sheets", correct: false},
            {text: "Colorful Style Sheets", correct: false},
            {text: "Cascading Style Sheets", correct: true},
        ]
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        answers: [
            {text: "text-color", correct: false},
            {text: "color", correct: true},
            {text: "text-style", correct: false},
            {text: "font-color", correct: false},
        ]
    },
    {
        question: "Which HTML tag is used to define an unordered list?",
        answers: [
            {text: "ol", correct: false},
            {text: "list", correct: false},
            {text: "ul", correct: true},
            {text: "ulist", correct: false},
        ]
    },
    {
        question: "Which CSS property is used to set the background color of an element?",
        answers: [
            {text: "bg-color", correct: false},
            {text: "color-background", correct: false},
            {text: "background-style", correct: false},
            {text: "background-color", correct: true},
        ]
    },
    {
        question: "Which HTML tag is used to create a table?",
        answers: [
            {text: "tab", correct: false},
            {text: "table", correct: true},
            {text: "tbl", correct: false},
            {text: "t", correct: false},
        ]
    },
    {
        question: "Which CSS property is used to control the spacing between lines of text?",
        answers: [
            {text: "line-height", correct: true},
            {text: "text-spacing", correct: false},
            {text: "line-spacing", correct: false},
            {text: "spacing", correct: false},
        ]
    },
    {
        question: "Which HTML tag is used to create a horizontal line?",
        answers: [
            {text: "line", correct: false},
            {text: "hl", correct: false},
            {text: "horizontal", correct: false},
            {text: "hr", correct: true},
        ]
    },
    {
        question: "What does CSS box model consist of?",
        answers: [
            {text: "Text, Padding, Border, Margin", correct: false},
            {text: "Text, Border, Margin, Background", correct: false},
            {text: "Content, Padding, Border, Background", correct: false},
            {text: "Content, Padding, Border, Margin", correct: true},
        ]
    },
    {
        question: "Which HTML tag is used to define a paragraph?",
        answers: [
            {text: "p", correct: true},
            {text: "para", correct: false},
            {text: "text", correct: false},
            {text: "pg", correct: false},
        ]
    },
    {
        question: "In CSS, which property is used to control the size of fonts in a web page?",
        answers: [
            {text: "text-size", correct: false},
            {text: "font-style", correct: false},
            {text: "font-size", correct: true},
            {text: "text-font", correct: false},
        ]
    },
    {
        question: "Which HTML tag is used to insert an image?",
        answers: [
            {text: "picture", correct: false},
            {text: "img", correct: true},
            {text: "image", correct: false},
            {text: "imgsrc", correct: false},
        ]
    },
    {
        question: "What is the default display property for a <div> element in CSS?",
        answers: [
            {text: "inline", correct: false},
            {text: "block", correct: true},
            {text: "inline-block", correct: false},
            {text: "none", correct: false},
        ]
    },
    {
        question: "Which CSS property is used to change the font style to italic?",
        answers: [
            {text: "text-style", correct: false},
            {text: "italic", correct: false},
            {text: "font-style", correct: true},
            {text: "font-italic", correct: false},
        ]
    },
    {
        question: "What is the purpose of the CSS property 'float'?",
        answers: [
            {text: "To move an element to the right", correct: false},
            {text: "To make an element transparent", correct: false},
            {text: "To align text within an element", correct: false},
            {text: "To allow text to wrap around an element", correct: true},
        ]
    },
    {
        question: "Which HTML tag is used for defining an input field for text in a form?",
        answers: [
            {text: "input", correct: true},
            {text: "text", correct: false},
            {text: "textfield", correct: false},
            {text: "textbox", correct: false},
        ]
    },
    {
        question: "Which CSS property is used to specify the space between cells in a table?",
        answers: [
            {text: "table-spacing", correct: false},
            {text: "cell-spacing", correct: false},
            {text: "border-spacing", correct: true},
            {text: "padding-spacing", correct: false},
        ]
    },
]; 

const questionTags = document.getElementById('quizapp-questiontag');
const answerButtons = document.getElementById('quizapp-answerbuttons');
const nextButton = document.getElementById('quizapp-nextbtn');

let questionIndex = 0;
let score = 0;

function startQuiz() {
    questionIndex = 0;
    score= 0;
    nextButton.innerHTML = "Next";
    shuffleQuestions(); // Shuffle questions before starting
    showQuestion();
}

// Create the shuffleQuestion function
function shuffleQuestions() {
    questions.sort(() => Math.random() - 0.5);
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[questionIndex];
    let questionNo = questionIndex + 1;
    questionTags.innerHTML = questionNo + "." + " " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("quizapp-answebuttons-btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    })
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}


function showScore(){
    resetState();
    questionTags.innerHTML = `You score ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    questionIndex++;
    if(questionIndex < questions.length) {
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener('click', ()=>{
    if(questionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();