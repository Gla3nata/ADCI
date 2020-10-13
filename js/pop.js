let isHide = true;

function showPop() {
    isHide = !isHide;
    console.log(isHide);
    document.querySelector('.box').style.display = isHide ? 'none' : 'flex';
}