const gameState = {
    score: 0,
    timeLeft: 10,
    gameStarted: false,
    timerInterval: null,
    reset: function() {
        this.score = 0;
        this.timeLeft = 10;
        this.gameStarted = false;
        this.timerInterval = null;
    },
    incrementScore: function() {
        this.score++;
    },
    decrementTime: function() {
        this.timeLeft--;
    }
};

const timer = {
    start: function(callback, interval) {
        gameState.timerInterval = setInterval(callback, interval);
    },
    stop: function() {
        clearInterval(gameState.timerInterval);
    }
};

function startGame() {
    if (gameState.gameStarted) return;

    gameState.reset();
    gameState.gameStarted = true;
    document.getElementById('score').textContent = gameState.score;
    document.getElementById('timer').textContent = gameState.timeLeft;
    timer.start(updateTimer, 1000);

    document.querySelectorAll('.circle').forEach(circle => {
        moveCircle(circle);
    });
}

function circleClicked(event) {
    if (!gameState.gameStarted) {
        startGame();
    }
    gameState.incrementScore();
    document.getElementById('score').textContent = gameState.score;
    moveCircle(event.target); 
}

function moveCircle(circleElement) {
    const x = Math.random() * (400 - 50);
    const y = Math.random() * (400 - 50);
    circleElement.style.left = x + 'px';
    circleElement.style.top = y + 'px';
}

function updateTimer() {
    gameState.decrementTime();
    document.getElementById('timer').textContent = gameState.timeLeft;
    if (gameState.timeLeft <= 0) {
        timer.stop();
        gameState.gameStarted = false;

        let highScore = localStorage.getItem('highScore');
        if (highScore === null) {
            highScore = 0;
        } else {
            highScore = parseInt(highScore);
        }

        if (gameState.score > highScore) {
            localStorage.setItem('highScore', gameState.score);
            alert('New high score! Your score is: ' + gameState.score);
        } else {
            alert('Game over! Your score is: ' + gameState.score + '. High score: ' + highScore);
        }
    }
}

document.querySelectorAll('.circle').forEach(circle => {
    circle.addEventListener('click', circleClicked);
});
