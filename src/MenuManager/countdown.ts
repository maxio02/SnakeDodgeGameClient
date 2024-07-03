const countdownThree = document.getElementById('countdown-three');
const countdownTwo = document.getElementById('countdown-two');
const countdownOne = document.getElementById('countdown-one');
const countdownGo = document.getElementById('countdown-go');

export function animateCountdown() {
    setTimeout(() => {
        countdownThree.classList.add('move-left');
    }, 500);

    setTimeout(() => {
        countdownTwo.classList.add('move-top');
    }, 900);

    setTimeout(() => {
        countdownOne.classList.add('move-right');
    }, 1300);

    setTimeout(() => {
        countdownGo.classList.add('move-down');
    }, 1700);
}

export function resetCountDown(){
    countdownThree.classList.remove('move-left');
    countdownTwo.classList.remove('move-top');
    countdownOne.classList.remove('move-right');
    countdownGo.classList.remove('move-down');
}

