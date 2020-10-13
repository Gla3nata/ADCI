let isDouwn = false;
let box = document.querySelector('.box');

function hidePop() {   
    isDouwn = !isDouwn
    box.style.height = isDouwn ? '179px' :'28px' ; 
}

//function hidePop() { 
//    box.style.height = ;   
//}