let navbar_title = 'Quiz App'
let navbar_list = [
    {name:'Home',href:'home'},
    {name:'Features',href:'features'},
    {name:'Contact',href:'contact'},
    {name:'About',href:'about'}
]

let el_app = document.querySelector(".app");
let scroll = 0

function started(){
    scroll += 100
    scrollToNext(scroll)   
}
function scrollToNext(val){
    el_app.style.transform=`translateX(-${val}%)`
    el_app.style.transition='1s'
}


// quiz
let quiz = document.querySelector('.app_quiz')
let indexQuiz = 0
let score = 0

function loadQuiz(i){
    console.log(score);
    quiz.innerHTML=`
    <div class="quiz-box">
        <h4>${i+1}/${quizes.length}</h4>
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
    for(let i=0;i<quiz_inp.length;i++){
        if(quiz_inp[i].checked && quiz_inp[i].value == quizes[val].answer){
            score += 100
        }
    }

    if(quizes.length - 1 == indexQuiz){
        let resultQuiz = document.querySelector(".app_result");
        let ansCorrect = score / 100;
        let ansUnCorrect = quizes.length - ansCorrect;

        resultQuiz.innerHTML=`
        <div class="quiz-box">
            <h4>All ${quizes.length} tests</h4><br>
            <h3>Your Score: ${score}ball</h3><br>
            <h4>Correct answers: ${ansCorrect}</h4>
            <h4>Uncorrect answers: ${ansUnCorrect}</h4>
        </div>`
        started()
    }else{
        indexQuiz++
        loadQuiz(indexQuiz)
    }
}