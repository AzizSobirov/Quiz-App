let quizes = [
    {
        quiz:'The negative of had ?',
        answer: "didn't have",
        options: {
            option1: "didn't have",
            option2: "didn't had",
            option3: "didn't say"
        }
    },{
        quiz:'Choose two answers: The negative of became.',
        answer: "didn't become",
        options: {
            option1: "didn became",
            option2: "didn't cut",
            option3: "didn't become"
        }
    },{
        quiz:'What is the output of 5 - 5',
        answer: 0,
        options: {
            option1: 1,
            option2: 0,
            option3: 3
        }
    },{
        quiz:'What is the output of 25 * 53',
        answer: 25 * 53,
        options: {
            option1: 25 * 53,
            option2: 25 * 55,
            option3: 25 * 34
        }
    }
]


let quiz = document.querySelector('.app_quiz')
let indexQuiz = 0
let score = 0

function loadQuiz(i){
    console.log(score);
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
    // let audio = new Audio()

    // for(let i=0;i<quiz_inp.length;i++){
    //     if(quiz_inp[i].checked && quiz_inp[i].value == quizes[val].answer){
    //         audio.src="./sounds/correct.mp3"
    //         audio.play()
    //         quiz_bx.style.background='#2292A4'
    //         quiz_bx.style.color='#fff'
    //     }else{
    //         audio.src="./sounds/death_game.mp3"
    //         audio.play()
    //         quiz_bx.style.background='#ff0066'
    //         quiz_bx.style.color='#fff'
    //         quiz_inp[i].style.boxShadow="0 0 0 2.5px #ff0066"
    //     }
    // }

    for(let i=0;i<quiz_inp.length;i++){
        if(quiz_inp[i].checked && quiz_inp[i].value == quizes[val].answer){
            score += 100
        }
    }

    if(quizes.length - 1 == indexQuiz){
        let resultQuiz = document.querySelector(".app_result")
        resultQuiz.innerHTML=`<h3>Your Score: ${score}ball</h3>`
        started()
    }else{
        indexQuiz++
        loadQuiz(indexQuiz)
    }
}

