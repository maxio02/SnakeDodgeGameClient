const countdownThree = document.getElementById('countdown-three');
const countdownTwo = document.getElementById('countdown-two');
const countdownOne = document.getElementById('countdown-one');
const countdownGo = document.getElementById('countdown-go');

export function animateCountdown() {
    setTimeout(() => {
        countdownThree.classList.add('move-left');
    }, 300);

    setTimeout(() => {
        countdownTwo.classList.add('move-top');
    }, 700);

    setTimeout(() => {
        countdownOne.classList.add('move-right');
    }, 1100);

    setTimeout(() => {
        countdownGo.classList.add('move-down');
    }, 1500);
}

export function resetCountDown(){
    countdownThree.classList.remove('move-left');
    countdownTwo.classList.remove('move-top');
    countdownOne.classList.remove('move-right');
    countdownGo.classList.remove('move-down');
}

