const buttonOne = document.querySelector("#p1Button");
const buttonTwo = document.querySelector("#p2Button");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const resetButton = document.querySelector('#reset');
const playToButton = document.querySelector('#playto');

let p1Score = 0;
let winningScore = 5;
let p2Score = 0;
let isGameOver = false;

buttonOne.addEventListener('click', () => {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Display.style.color = "green";
        }
    }
    p1Display.textContent = p1Score;
});

buttonTwo.addEventListener('click', () => {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            isGameOver = true;
            p2Display.style.color = "green";
        }
    }
    p2Display.textContent = p2Score;
});

playToButton.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset();
});

resetButton.addEventListener('click', reset); 

function reset() {
    isGameOver = false;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Score = 0;
    p2Score = 0;
    p1Display.style.color = "black";
    p2Display.style.color = "black";
}
