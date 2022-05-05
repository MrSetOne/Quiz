//constants of question and answer
const preguntas = {
    "response_code": 0,
    "results": [{
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "medium",
            "question": "In the game &quot;Undertale&quot;, who was Mettaton&#039;s creator?",
            "correct_answer": "Alphys",
            "incorrect_answers": [
                "Undyne",
                "Sans",
                "Asgore"
            ]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "boolean",
            "difficulty": "medium",
            "question": "The first Maxis game to feature the fictional language &quot;Simlish&quot; was The Sims (2000).",
            "correct_answer": "False",
            "incorrect_answers": [
                "True"
            ]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "boolean",
            "difficulty": "medium",
            "question": "In Half-Life 2, if you play the zombies&#039; speech in reverse, they actually speak coherent English.",
            "correct_answer": "True",
            "incorrect_answers": [
                "False"
            ]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "boolean",
            "difficulty": "medium",
            "question": "The Sniper&#039;s SMG in Team Fortress 2, was originally intended to be the Scout&#039;s primary weapon.",
            "correct_answer": "True",
            "incorrect_answers": [
                "False"
            ]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "boolean",
            "difficulty": "medium",
            "question": "Resident Evil 4 was originally meant to be a Nintendo GameCube exclusive.",
            "correct_answer": "True",
            "incorrect_answers": [
                "False"
            ]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "medium",
            "question": "How many different notes is the tune, &quot;Song of Healing&quot;, comprised of in &quot;The Legend of Zelda: Majora&#039;s Mask&quot;?",
            "correct_answer": "3",
            "incorrect_answers": [
                "4",
                "1",
                "6"
            ]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "medium",
            "question": "When was &quot;System Shock&quot; released?",
            "correct_answer": "1994",
            "incorrect_answers": [
                "1995",
                "2000",
                "1998"
            ]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which company developed and published Game Dev Tycoon?",
            "correct_answer": "Greenheart Games",
            "incorrect_answers": [
                "Greenland Games",
                "The Tycoonists",
                "MomCorp"
            ]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "boolean",
            "difficulty": "medium",
            "question": "&quot;Return to Castle Wolfenstein&quot; was the only game of the Wolfenstein series where you don&#039;t play as William &quot;B.J.&quot; Blazkowicz.",
            "correct_answer": "False",
            "incorrect_answers": [
                "True"
            ]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "medium",
            "question": "What is the lowest amount of max health you can have in Team Fortress 2?",
            "correct_answer": "70",
            "incorrect_answers": [
                "100",
                "50",
                "95"
            ]
        }
    ]
}

console.log(preguntas)

/* DECLARACIONES DE VARIABLES */

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
const questionForm = document.getElementById('question-form') //
const option1 = document.getElementById('option1')
const option2 = document.getElementById('option2')
const option3 = document.getElementById('option3')
const option4 = document.getElementById('option4')

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

startForm.addEventListener('click', (e) => {
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

questionForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(selectedOption())
})