let isDouwn = false;
let box = document.querySelector('.box');
let arrow = document.querySelector('.slider-arrow');

function showPop() {   
    isDouwn = !isDouwn;
    box.style.height = isDouwn ? '235px' :'28px' ;
    arrow.style.transform = isDouwn ? "rotate(180deg)" : "rotate(0)";
}

//function hidePop() { 
//    box.style.height = ;   
//}