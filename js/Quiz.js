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
            questions.forEach(item => {
                item.question = item.question.replaceAll(/&quot;/ig, "'").replaceAll(/&eacute;/ig, "é").replaceAll(/&#039;/ig, "")
                item.incorrect_answers.forEach(incorrect => {
                    incorrect.replaceAll(/&quot;/ig, "'").replaceAll(/&eacute;/ig, "é").replaceAll(/&#039;/ig, "");
                })
            });
            console.log(questions);

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

function generateRandomAnswers() {
    questions[counterQuestion].incorrect_answers.forEach(item => {
        currentAnswers.push({ answer: item, correct: false })
    })
    currentAnswers.splice((Math.floor(Math.random() * 4)), 0, { answer: questions[counterQuestion].correct_answer, correct: true })
}

function printQuiz() {
    heroCount.innerHTML = `${counterQuestion+1}/<span>10</span>`;
    questionTitle.innerText = questions[counterQuestion].question;
    option01.innerText = currentAnswers[0].answer
    option02.innerText = currentAnswers[1].answer
    option03.innerText = currentAnswers[2].answer
    option04.innerText = currentAnswers[3].answer
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
    generateRandomAnswers()
    printQuiz()



    goTo(pageQuestion);
})

getQuestions();



/* ------------------ DevZone ------------------ */



// function printQuestion() {
//     questionTitle.innerText = questions[0].question
//     option01.innerText = questions[0].correct_answer
//     option02.innerText = questions[0].incorrect_answers[0]
//     option03.innerText = questions[0].incorrect_answers[1]
//     option04.innerText = questions[0].incorrect_answers[2]
// }

questionForm.addEventListener('submit', (e) => {
    e.preventDefault()
})