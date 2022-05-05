//constants of question and answer
let questions = []


//Download
axios
    .get('https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple')
    .then((res) => {
        questions = res.data.results;
        console.log(questions);
    })
    .catch((err) => console.error(err));

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
const option1 = document.getElementById('option1')
const option2 = document.getElementById('option2')
const option3 = document.getElementById('option3')
const option4 = document.getElementById('option4')
const option01 = document.getElementById('option01')
const option02 = document.getElementById('option02')
const option03 = document.getElementById('option03')
const option04 = document.getElementById('option04')
console.log(questionTitle);
//constants of leaderboard page
const pageLeaderboard = document.getElementById('leaderboard-page')

//--------------------------------------------------------------------------------------

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

btnPlay.addEventListener('click', () => goTo(pageStart))
btnWellcome.addEventListener('click', () => goTo(pageStart))
btnLeaderboard.addEventListener('click', () => goTo(pageLeaderboard))
submitBtn.addEventListener('click', () => goTo(pageQuestion))

startForm.addEventListener('submit', (e) => {
    e.preventDefault();
    currentUser = userNameInput.value;
    goTo(pageQuestion);
})

let currentUser = ""

function selectedOption() { //Devuelve el numero en indice
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

function printQuestion() {
    questionTitle.innerText = questions[0].question
    option01.innerText = questions[0].correct_answer
    option02.innerText = questions[0].incorrect_answers[0]
    option03.innerText = questions[0].incorrect_answers[1]
    option04.innerText = questions[0].incorrect_answers[2]
}

questionForm.addEventListener('submit', (e) => {
    e.preventDefault()
    printQuestion()

})