const quiz = [
    {
        question: "What are you doing?",
        a: "nachi",
        b: "khai",
        c: "kisuna",
        d: "tomar kaj dekhi",
        correct: "d"
    },
    {
        question: "What is your OS system?",
        a: "Windows",
        b: "I dont have PC",
        c: "Linux",
        d: "Mac",
        correct: "a"
    },
    {
        question: "How are you?",
        a: "fine",
        b: "vala na",
        c: "good",
        d: "janina",
        correct: "a"
    },
    {
        question: "What is your Aimlife?",
        a: "Developer",
        b: "Husband",
        c: "Travellar",
        d: "An honest man",
        correct: "d"
    }
];
let questionId = document.getElementById("question");
let quizBox = document.getElementById("quiz-box");
let ansa = document.getElementById("text-a");
let ansb = document.getElementById("text-b");
let ansc = document.getElementById("text-c");
let ansd = document.getElementById("text-d");
let submit = document.getElementById("submit");
let currentquestion = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    // deSelect();
    const quizData = quiz[currentquestion];
    questionId.innerHTML = quizData.question;
    ansa.innerHTML = quizData.a;
    ansb.innerHTML = quizData.b;
    ansc.innerHTML = quizData.c;
    ansd.innerHTML = quizData.d;
    if(submit = true){
        currentquestion++;
    }
}
// function getSelected() {
//     const result = document.querySelectorAll("ans");
//     let ans = undefined;
//     result.forEach((ansar) => {
//         if (ansar.checked) {
//             ans = ansar.id;
//         }

//     });
//     return ans;
// }
// function deSelect() {
//     result.forEach((ansar) => {
//         ansar.checked = false;
//     });
// }

// submit.addEventListener('click', () => {
//     const ans = getSelected();

//     if (ans) {
//         if (ans === quiz[currentquestion].correct) {
//             score++;
//         }
//         currentquestion++;
//         if (currentquestion < quiz.length) {
//             loadQuiz();
//         } else {
//             quizBox.innerHTML = "your Score is:" + score + "/" + quiz.length;
//         }
//     }
// });