//constants of navbar
const btnPlay = document.getElementById('btn-play')
const btnLeaderboard = document.getElementById('btn-Leaderboard')

//constants of wellcome page
const pageWellcome = document.getElementById('wellcome-page')
const btnWellcome = document.getElementById('btn-wellcome')

//constants of start page
const pageStart = document.getElementById('start-page') //Page
const startForm = document.getElementById('start-form') //Form
const userNameInput = document.getElementById('userName-input') //Input
const submitBtn = document.getElementById('submit-btn') // Submit

//constants of question page
const pageQuestion = document.getElementById('question-page') //Page
const questionTitle = document.getElementById('question-title') // Question
const questionForm = document.getElementById('question-form') //
const heroCount = document.getElementById('hero-count')
const option1 = document.getElementById('option1')
const option2 = document.getElementById('option2')
const option3 = document.getElementById('option3')
const option4 = document.getElementById('option4')
const option01 = document.getElementById('option01')
const option02 = document.getElementById('option02')
const option03 = document.getElementById('option03')
const option04 = document.getElementById('option04')
const allOptions = document.getElementsByClassName("question__option")
    // let selectedOption = document.getElementsByClassName("question__option--selected")


//leaderboard page's constant
const pageLeaderboard = document.getElementById('leaderboard-page')

//question and answer's constant
let questions = []

//current user
let currentUser = ""

//question counter
let counterQuestion = 0;

//current Answers
let currentAnswers = []

// Functions
function getQuestions() {
    axios
        .get('https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple')
        .then((res) => {
            questions = res.data.results;
        })
        .catch((err) => console.error(err));
}

function dNoneAll() {
    pageWellcome.classList.add('d-none')
    pageLeaderboard.classList.add('d-none')
    pageStart.classList.add('d-none')
    pageQuestion.classList.add('d-none')
}

function goTo(page) {
    dNoneAll()
    page.classList.remove('d-none')
}

function selectedOption() {
    if (option1.checked == true) {
        return 0;
    }
    if (option2.checked == true) {
        return 1;
    }
    if (option3.checked == true) {
        return 2;
    }
    if (option4.checked == true) {
        return 3;
    } else {
        return false
    }
}

function generateRandomAnswers() {
    questions[counterQuestion].incorrect_answers.forEach(item => {
        currentAnswers.push({ answer: item, correct: false })
    })
    currentAnswers.splice((Math.floor(Math.random() * 4)), 0, { answer: questions[counterQuestion].correct_answer, correct: true })
    console.log(currentAnswers);
}

function printQuiz() {
    currentAnswers = []
    generateRandomAnswers()
    heroCount.innerHTML = `${counterQuestion+1}/<span>10</span>`;
    questionTitle.innerHTML = questions[counterQuestion].question;
    option01.innerHTML = currentAnswers[0].answer
    option02.innerHTML = currentAnswers[1].answer
    option03.innerHTML = currentAnswers[2].answer
    option04.innerHTML = currentAnswers[3].answer
}

function deleteSelecteds() {
    Array.from(allOptions).forEach(item => {
        item.classList.remove("question__option--selected");
        item.children[0].checked = false;

    })

}

// NavListeners
btnPlay.addEventListener('click', () => {
    goTo(pageStart);
    getQuestions()
})
btnWellcome.addEventListener('click', () => {
    goTo(pageStart);
    getQuestions()
})
btnLeaderboard.addEventListener('click', () => goTo(pageLeaderboard))
submitBtn.addEventListener('click', () => goTo(pageQuestion))

startForm.addEventListener('submit', (e) => {
    e.preventDefault();
    currentUser = userNameInput.value;
    counterQuestion = 0;
    printQuiz()
    goTo(pageQuestion);
    // para borrar
})

questionForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(selectedOption());
    counterQuestion++
    deleteSelecteds();
    // Saber si he acertado

    printQuiz()
})

Array.from(allOptions).forEach(item => {
    item.addEventListener("click", () => {
        deleteSelecteds()
        item.classList.add("question__option--selected")
        item.children[0].checked = true
    })
});

getQuestions();



/* ------------------ DevZone ------------------ */



// function printQuestion() {
//     questionTitle.innerText = questions[0].question
//     option01.innerText = questions[0].correct_answer
//     option02.innerText = questions[0].incorrect_answers[0]
//     option03.innerText = questions[0].incorrect_answers[1]
//     option04.innerText = questions[0].incorrect_answers[2]
// }