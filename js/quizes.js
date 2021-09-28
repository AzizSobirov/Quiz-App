let quizes = [
    {
        quiz:'Choose the answer: The negative of had.',
        answer: "didn't have",
        options: {
            option1: "didn't have",
            option2: "didn't had",
            option3: "didn't say"
        }
    },{
        quiz:'Choose the answer: The negative of became.',
        answer: "didn't become",
        options: {
            option1: "didn became",
            option2: "didn't cut",
            option3: "didn't become"
        }
    },{
        quiz:'Choose the correct sentence in negative of She wrote a letter.',
        answer: "She didn't write a letter.",
        options: {
            option1: "She didn't wrote a card.",
            option2: "She didn't write a letter.",
            option3: "She didn't writed a letter."
        }
    },{
        quiz:'They _____________ the project yet',
        answer: "Hadn't completed",
        options: {
            option1: "Hadn't completed",
            option2: "Haven't completed",
            option3: "Hasn't completed"
        }
    },{
        quiz:'She _________ in this place before.',
        answer: "had worked",
        options: {
            option1: "has worked",
            option2: "had worked",
            option3: "have worked"
        }
    },{
        quiz:'Past of walk',
        answer: "walked",
        options: {
            option1: "walkeed",
            option2: "walk",
            option3: "walked"
        }
    },{
        quiz:'Past of take',
        answer: "took",
        options: {
            option1: "taked",
            option2: "take",
            option3: "took"
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
<h3>All ${quizes.length} tests</h3><br>
<h3>Your Score: ${score}ball</h3><br>
<h3>Correct answers: ${ansCorrect}</h3>
<h3>Uncorrect answers: ${ansUnCorrect}</h3>

`
        started()
    }else{
        indexQuiz++
        loadQuiz(indexQuiz)
    }
}