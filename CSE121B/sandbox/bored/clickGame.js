let score = 0;
let timeLeft = 10;
let gameInterval;
let timerInterval;

function startGame() {
    score = 0;
    timeLeft = 10;
    document.getElementById('score').textContent = score;
    document.getElementById('timer').textContent = timeLeft;
    gameInterval = setInterval(moveCircle, 1000);
    timerInterval = setInterval(updateTimer, 1000);
}

function circleClicked() {
    score++;
    document.getElementById('score').textContent = score;
    moveCircle();
}

function moveCircle() {
    const circle = document.querySelector('.circle');
    const x = Math.random() * (400 - 50);
    const y = Math.random() * (400 - 50);
    circle.style.left = x + 'px';
    circle.style.top = y + 'px';
}

function updateTimer() {
    timeLeft--;
    document.getElementById('timer').textContent = timeLeft;
    if (timeLeft <= 0) {
        clearInterval(gameInterval);
        clearInterval(timerInterval);
        alert('Game over! Your score is: ' + score);
    }
}
