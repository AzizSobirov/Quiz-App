let quizes = [
    {
        quiz:'What is the output of 5 - 2',
        answer: 3,
        options: {
            option1: 1,
            option2: 2,
            option3: 3
        }
    },{
        quiz:'What is the output of 5 - 4',
        answer: 1,
        options: {
            option1: 1,
            option2: 2,
            option3: 3
        }
    }
]


let quiz = document.querySelector('.app_quiz')
let indexQuiz = 0

function loadQuiz(i){
    quiz.innerHTML=`
    <div class="quiz-box">
        <h3>${quizes[i].quiz}</h3>
        <form action="">
            <label for="opt1">
                <input type="radio" class="quiz_opt" name="opt" id="opt1" value="${quizes[i].options.option1}">
                <h4>${quizes[i].options.option1}</h4>
            </label>
            <label for="opt2">
                <input type="radio" class="quiz_opt" name="opt" id="opt2" value="${quizes[i].options.option2}">
                <h4>${quizes[i].options.option2}</h4>
            </label>
            <label for="opt3">
                <input type="radio" class="quiz_opt" name="opt" id="opt3" value="${quizes[i].options.option3}">
                <h4>${quizes[i].options.option3}</h4>
            </label>
        </form>
        <div id="as_btn" onclick="nextQuiz(${i})"><a href="#">Next</a></div>
    </div>`
}loadQuiz(indexQuiz)

function nextQuiz(val){
    let quiz_bx = document.querySelector(".quiz-box")
    let quiz_inp = document.querySelectorAll('.quiz_opt')
    let audio = new Audio()

    for(let i=0;i<quiz_inp.length;i++){
        if(quiz_inp[i].checked && quiz_inp[i].value == quizes[val].answer){
            audio.src="./sounds/correct.mp3"
            audio.play()
            quiz_bx.style.background='#2292A4'
            quiz_bx.style.color='#fff'
        }else{
            audio.src="./sounds/death_game.mp3"
            audio.play()
            quiz_bx.style.background='#ff0066'
            quiz_bx.style.color='#fff'
            quiz_inp[i].style.boxShadow="0 0 0 2.5px #ff0066"
        }
    }

    indexQuiz++
    loadQuiz(indexQuiz)
}

