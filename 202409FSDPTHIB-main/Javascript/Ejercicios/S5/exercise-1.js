let cardArray = [
    {
      id: 1,
      name: "earth",
      img: "public/exercise-1/earth.svg",
    },
    {
      id: 2,
      name: "jupiter",
      img: "public/exercise-1/jupiter.svg",
    },
    {
      id: 3,
      name: "mars",
      img: "public/exercise-1/mars.svg",
    },
    {
      id: 4,
      name: "mercury",
      img: "public/exercise-1/mercury.svg",
    },
    {
      id: 5,
      name: "saturn",
      img: "public/exercise-1/saturn.svg",
    },
    {
      id: 6,
      name: "uranus",
      img: "public/exercise-1/uranus.svg",
    },
    {
      id: 7,
      name: "earth",
      img: "public/exercise-1/earth.svg",
    },
    {
      id: 8,
      name: "jupiter",
      img: "public/exercise-1/jupiter.svg",
    },
    {
      id: 9,
      name: "mars",
      img: "public/exercise-1/mars.svg",
    },
    {
      id: 10,
      name: "mercury",
      img: "public/exercise-1/mercury.svg",
    },
    {
      id: 11,
      name: "saturn",
      img: "public/exercise-1/saturn.svg",
    },
    {
      id: 12,
      name: "uranus",
      img: "public/exercise-1/uranus.svg",
    },
];

let $firstCard = null;
let attempts = 0;
let score = 0;

function init() {
    loadBoard();
    assignEvents();
}

function assignEvents() {
    let $cards = document.querySelectorAll('.card');
    for(let $card of $cards) {
        $card.addEventListener('click', selectCard);
    }
}

function selectCard() {
    if(this.classList.contains('resolved')) {
        alert('Esa tarjeta ya está correcta');
        return;
    }

    if(
        $firstCard !== null &&
        this.dataset.id === $firstCard.dataset.id
    ) {
        alert('No debes hacer click en la misma tarjeta');
        return;
    }
    this.classList.add('active');
    if($firstCard === null) {
        //Primer click
        $firstCard = this;
    } else {
        //Segundo click
        addAttempt();
        
        if(this.dataset.name === $firstCard.dataset.name) {
            resolveTry($firstCard, this);
        }

        setTimeout(hideBoard, 500);

        $firstCard = null;
    }
}

function resolveTry($card1, $card2) {
    score++;
    let $scoreSpan = document.querySelector('#score');
    $scoreSpan.textContent = score;

    $card1.classList.add('resolved');
    $card2.classList.add('resolved');

    checkWin();
}

function checkWin() {
    let $resolvedCars = document.querySelectorAll('.card.resolved');
    if($resolvedCars.length === cardArray.length) {
        setTimeout(function() {
            alert('Enhorabuena, un pin pa ti');
        }, 1200);
    }
}

function addAttempt() {
    attempts++;
    let $attemptsSpan = document.querySelector('#attempts');
    $attemptsSpan.textContent = attempts;
}

function loadBoard() {
    let $container = document.querySelector('#cardsContainer');
    for(let card of cardArray) {
        let $card = document.createElement('div');
        $card.classList.add('card');
        $card.dataset.id = card.id;
        $card.dataset.name = card.name;

        let $img = document.createElement('img');
        $img.src = card.img;
        $img.alt = card.name;
        $card.appendChild($img);

        $container.appendChild($card);
    }
}

function hideBoard() {
    let $selectedCards = document.querySelectorAll('.card.active');
    for(let $card of $selectedCards) {
        $card.classList.remove('active');
    }
}

init();