let secondsLeft = 30;
let score = 0;
let timer = setInterval(moveDiglet, 500);
assignClickEvent();

function assignClickEvent() {
    let $squares = document.querySelectorAll('.b-square');
    for(let $square of $squares) {
        $square.addEventListener('click', whack);
    }
}

function whack() {
    if(
        this.classList.contains('b-mole') &&
        secondsLeft > 0
    ) {
        addScore();
        hideDiglet();
    }
}

function addScore() {
    score++;
    let $score = document.querySelector('#score');
    $score.textContent = score;
}

function moveDiglet() {
    hideDiglet();
    showDiglet();
    reduceTime();
}

function showDiglet() {
    let $squares = document.querySelectorAll('.b-square');
    let randomIndex = getRandomInt($squares.length);
    $squares[randomIndex].classList.add('b-mole');
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function hideDiglet() {
    let $diglet = document.querySelector('.b-mole');
    if($diglet) {
        $diglet.classList.remove('b-mole');
    }
}

function reduceTime() {
    secondsLeft -= 0.5;
    let $secondsLeft = document.querySelector('#secondsLeft');
    $secondsLeft.textContent = secondsLeft;
    
    if(secondsLeft === 0) {
        clearInterval(timer);
        hideDiglet();
        alert('Has conseguido ' + score + ' puntos!');
    }
}