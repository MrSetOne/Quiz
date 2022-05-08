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
const nameLabel = document.getElementById('name-label') // Label

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

// stats pages's constant
const pageStats = document.getElementById('stats-page')
const endScore = document.getElementById('endScore')
const endGraph = document.getElementById("endGraph")
const playAgain = document.getElementById('play-again-btn')
const showLeaderBoard = document.getElementById('leaderboard-btn')
const positionScore = document.getElementById('position-score')

//leaderboard page's constant
const pageLeaderboard = document.getElementById('leaderboard-page')
const nameCells = document.getElementsByClassName('table__name')
const scoreCells = document.getElementsByClassName('table__score')
console.log(nameCells);

//question and answer's constant
let questions = []

//current user
let currentUser = ""

//question counter
let counterQuestion = 0;

//current Answers
let currentAnswers = []

//current points
let currentPoints = 0;

//DB
let hotDB = []

let scoreChart = new Chart(endGraph, {
    type: 'doughnut',
    data: {
        labels: ['Correct', 'faliled'],
        datasets: [{
            label: 'Points',
            data: [currentPoints, ((currentPoints - 10) * -1)],
            backgroundColor: [
                '#023047',
                '#02304781',
            ],
            borderColor: ['rgba(255, 99, 132,0)', 'rgba(255, 99, 132,0)'],
            rotation: 210,
            borderRadius: 200,
            circumference: 300,
            spacing: 10,
            cutout: 65,
            hoverOffset: 0,
            hoverBorderColor: 'rgba(255, 99, 132,0)',
            hoverBorderWidth: 0,
        }]
    },
    options: {
        legend: {
            display: false
        }
    }
})

let leaderboardInfo = {
    users: [],
    points: []
}

// Functions

const dbSync = {
    toLocalStorage: () => {
        localStorage.db = JSON.stringify(hotDB);
    },
    toHotDB: () => {
        if (localStorage.db != undefined) {
            hotDB = JSON.parse(localStorage.db)
        }
    }
}

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
    pageStats.classList.add('d-none')
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
        item.children[1].checked = false;

    })

}

function isTrue() {
    if (currentAnswers[selectedOption()].correct == true) {
        currentPoints++;
    }
}

function includeInDB() {
    let user = {};
    user.user = currentUser;
    user.points = currentPoints;
    hotDB.push(user)
    console.log(hotDB);
}

function yourPosition() {
    let respuesta
    hotDB.forEach((element, iteration) => {
        if ((element.user == currentUser) && (element.points == currentPoints)) {
            respuesta = iteration;
        }
    })
    return respuesta
}

function printStats() {
    endScore.innerHTML = `${currentPoints}/10`
    console.log(yourPosition());
    positionScore.innerText = `#${(yourPosition()+1)}`
}

function updateChart() {
    scoreChart.data.datasets[0].data = []
    scoreChart.data.datasets[0].data = [currentPoints, ((currentPoints - 10) * -1)]
    scoreChart.update()
}

function updateLeaderboard() {
    for (let i = 1; i < hotDB.length; i++) {
        if (hotDB[i].points > hotDB[(i - 1)].points) {
            hotDB.splice((i - 1), 0, hotDB[i]);
            hotDB.splice((i + 1), 1);
            i = 0;
        }
    }
    console.log(hotDB);
}

function printLeaderboard() {
    for (let i = 0; i < 10; i++) {
        nameCells[i].innerText = hotDB[i].user;
        scoreCells[i].innerText = hotDB[i].points
    }
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
    userNameInput.value = ""
    counterQuestion = 0;
    printQuiz()
    goTo(pageQuestion);
    nameLabel.classList.remove('name__label--styled')
})

questionForm.addEventListener('submit', (e) => {
    e.preventDefault()
    isTrue()
    if (counterQuestion == 9) {
        counterQuestion = 0;
        deleteSelecteds();
        updateChart();
        includeInDB();
        updateLeaderboard();
        dbSync.toLocalStorage();
        printStats();
        printLeaderboard();
        goTo(pageStats);
        currentPoints = 0;
    } else {
        deleteSelecteds();
        counterQuestion++;
        printQuiz()
        console.log(currentPoints);
        console.log(counterQuestion);
    }
})

Array.from(allOptions).forEach(item => {
    item.addEventListener("click", () => {
        deleteSelecteds()
        item.classList.add("question__option--selected")
        item.children[1].checked = true
    })
});

playAgain.addEventListener('click', () => {
    goTo(pageStart);
    getQuestions()
})

userNameInput.addEventListener("click", () => nameLabel.classList.add('name__label--styled'))

showLeaderBoard.addEventListener('click', () => goTo(pageLeaderboard))

dbSync.toHotDB()

console.log(endGraph.value);

console.log(hotDB);

printLeaderboard()

/* ------------------ DevZone ------------------ */