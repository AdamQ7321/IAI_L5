

window.onscroll=function () {
    ButtonOnTop();
};
const buttonup = document.querySelector('.MyButton');

buttonup.addEventListener('click', RushOnTop);

function ButtonOnTop(){


    if(document.body.scrollTop>200||document.documentElement.scrollTop>200){
        document.querySelector(".MyButton").style.display="block";

    } else{

        document.querySelector(".MyButton").style.display= "none";

    }
}

function RushOnTop(){

    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;

}