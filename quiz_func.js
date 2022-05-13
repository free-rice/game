const totalQ = document.querySelector(".total-question");
const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const answersIndicatorContainer = document.querySelector(".answers-indicator")
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");

const startingMinutes = 7;
let time = startingMinutes * 60;
const countdownEl = document.getElementById("countdown");



let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0;



function updateCountdown()
{
    
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    countdownEl.innerHTML = `${minutes} : ${seconds}`;

    if (minutes == 0)
    {
        if (seconds <= 0)
        {
            quizOver();
        }
        else
        {
            time--;
        }
    }
    else
    {
        time--;
    }
    

    
    
  
}


// push the questions into availableQuestions Array
function setAvailableQuestions()
{
    const totalQuestion = quiz.length;
    
    for (let i=0; i<totalQuestion; i++)
    {
        availableQuestions.push(quiz[i]);
    }
}

//set the question number, qna
function getNewQuestion()
{
    //set question number
    // questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of " + quiz.length;

    //set question text
    // const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    const questionIndex = availableQuestions[questionCounter++ % availableQuestions.length];
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q;
    //get the position of question index from available question array
    const index1 = availableQuestions.indexOf(questionIndex);
    //remove the quiestion index from the available question (no repeated)
    availableQuestions.splice(index1, 1);

    const optionLen = currentQuestion.options.length;
    // push options into availableOptions Array
    for (let i = 0; i < optionLen; i++)
    {
        availableOptions.push(i);
    }
    optionContainer.innerHTML = '';
    let animationDelay = 0.2;
    // create options in html
    for (let i = 0; i < optionLen; i++)
    {
        const optonIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)]
        const index2 = availableOptions.indexOf(optonIndex);
       //remove so that no repeated
        availableOptions.splice(index2, 1);
        const option = document.createElement("div");
        option.innerHTML = currentQuestion.options[optonIndex];
        option.id = optonIndex;
        option.style.animationDelay = animationDelay + 's';
        animationDelay = animationDelay + 0.15;
        option.className = "option";
        optionContainer.appendChild(option)
        option.setAttribute("onclick", "getResult(this)");
    }
    questionCounter++;
}
//get the result of current attempt
function getResult(element)
{
    const id = parseInt(element.id);
    if (id === currentQuestion.answer)
    {
        // set the green color to the right answer
        element.classList.add("correct");
        correctAnswers++;
    }
    else
    {
        element.classList.add("wrong");
        //show the correct answer
        const optionLen =  optionContainer.children.length;
        for (let i = 0; i < optionLen; i++)
        {
            if(parseInt(optionContainer.children[i].id) === currentQuestion.answer)
            {
                optionContainer.children[i].classList.add("correct");
            }
        }
    }
    unclickableOptions();
    quizBox.btn.remove("hide");
}

function unclickableOptions()
{
    const optionLen = optionContainer.children.length;
    for (let i = 0; i < optionLen; i++)
    {
        optionContainer.children[i].classList.add("already-answered");
    }
}


function next()
{
    if (questionCounter === quiz.length)
    {
        quizOver();
    }
    else
    {
        getNewQuestion();
    }
}

function quizOver()
{
    quizBox.classList.add("hide");
    resultBox.classList.remove("hide");
    quizResult();
}

function quizResult()
{
    const percentage = correctAnswers  * 10;
    resultBox.querySelector(".percentage").innerHTML = percentage.toFixed();
}

function resetQuiz()
{
    questionCounter = 0;
    correctAnswers = 0;
    
}

function tryAgain()
{
    resultBox.classList.add("hide");
    homeBox.classList.remove("hide");
    resetQuiz();
    
    
}

function startQuiz()
{
    time = startingMinutes * 60;
    setInterval(updateCountdown, 1000);
    // totalQ.innerHTML = quiz.length;
    homeBox.classList.add("hide");
    quizBox.classList.remove("hide");
    // set all questions in availableQuestion Array
    setAvailableQuestions();

    getNewQuestion();

}
