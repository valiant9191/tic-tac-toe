let proofOne = [];
let proofTwo = [];
const arrayForChecking = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]
];
let playerOne = false;
let playerTwo = false;
let bool = false;
const style = document.querySelector('#grats');
const winner = document.querySelector('#player');
const oneMore = document.querySelector('#oneMore');
const playerCounter1 = document.querySelector("#player1");
const playerCounter2 = document.querySelector("#player2");
playerCounter1.innerHTML = 0;
playerCounter2.innerHTML = 0;



let buttonRepeat = document.querySelector('#repeat');
let buttonRepeat2 = document.querySelector('#repeat2');


const playground = document.querySelectorAll('.pole');


playground.forEach((div, id) => div.addEventListener("click", function (el) {

    if (el.target.textContent === "") {
        // send to array and send into html, also change boolean for changing x & o
        if (bool) { el.target.textContent = 'X'; }
        else { el.target.textContent = 'O'; }
        bool = !bool
        // sending id into next func for checking who is the winner
        checkArray(id)
        full()
    }
    else { console.log("choose another") };
}
))

// send to array result 
function checkArray(el) {
    if (bool) {
        proofOne.push(el)
        checkingOne()

    }
    else {
        proofTwo.push(el)
        checkingTwo()
    };
}

function checkingOne() {
    arrayForChecking.forEach(el => {
        if (proofOne.includes(el[0]) && proofOne.includes(el[1]) && proofOne.includes(el[2])) {
            playerOne = true;
            grats()
        }
    })
};

function checkingTwo() {
    arrayForChecking.forEach(el => {
        if (proofTwo.includes(el[0]) && proofTwo.includes(el[1]) && proofTwo.includes(el[2])) {

            playerTwo = true;
            grats()
        }
    })
};

function grats() {
    if (playerOne == true || playerTwo == true) {
        if (playerOne) {
            winner.innerHTML = "Player One is WINNER!";
            playerCounter1.innerHTML = parseInt(playerCounter1.innerText) + 1
        };
        if (playerTwo) {
            winner.innerHTML = "Player Two is WINNER!";
            playerCounter2.innerHTML = parseInt(playerCounter2.innerText) + 1
        };
        return style.style.display = "flex"

    }
}

buttonRepeat.addEventListener('click', function () { repeat() })

function repeat() {
    proofOne = [];
    proofTwo = [];
    playerOne = !true;
    playerTwo = !true;
    playground.forEach((el) => el.innerText = '');
    oneMore.style.display='none';
    style.style.display = 'none';
}

buttonRepeat2.addEventListener('click', function () { repeat() })


function full() {
    if (proofOne.length + proofTwo.length == 9) {
        oneMore.style.display='flex';
    }
}


