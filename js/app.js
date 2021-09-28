let navbar_title = 'Quiz App'
let navbar_list = [
    {
        name:'Home',
        href:'#home'
    },
    {
        name:'Home',
        href:'#home'
    },
    {
        name:'Home',
        href:'#home'
    },
    {
        name:'Home',
        href:'#home'
    }
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