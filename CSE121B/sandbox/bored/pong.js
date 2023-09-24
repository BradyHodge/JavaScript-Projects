const ball = document.querySelector('.ball');
const leftPaddle = document.querySelector('.left');
const rightPaddle = document.querySelector('.right');
const leftScoreEl = document.getElementById('leftScore');
const rightScoreEl = document.getElementById('rightScore');

let ballSpeedX = 2;
let ballSpeedY = 2;
let leftScore = 0;
let rightScore = 0;

function updateGame() {
    const ballRect = ball.getBoundingClientRect();
    const leftPaddleRect = leftPaddle.getBoundingClientRect();
    const rightPaddleRect = rightPaddle.getBoundingClientRect();

    // Ball collision with top and bottom
    if (ballRect.top <= 0 || ballRect.bottom >= window.innerHeight) {
        ballSpeedY = -ballSpeedY;
    }

    // Ball collision with paddles
    if ((ballSpeedX < 0 && ballRect.left <= leftPaddleRect.right && ballRect.top >= leftPaddleRect.top && ballRect.bottom <= leftPaddleRect.bottom) ||
        (ballSpeedX > 0 && ballRect.right >= rightPaddleRect.left && ballRect.top >= rightPaddleRect.top && ballRect.bottom <= rightPaddleRect.bottom)) {
        ballSpeedX = -ballSpeedX;
    }

    // Ball out of bounds
    if (ballRect.left <= 0) {
        rightScore++;
        resetBall();
    } else if (ballRect.right >= window.innerWidth) {
        leftScore++;
        resetBall();
    }

    ball.style.left = ball.offsetLeft + ballSpeedX + "px";
    ball.style.top = ball.offsetTop + ballSpeedY + "px";

    leftScoreEl.textContent = leftScore;
    rightScoreEl.textContent = rightScore;

    requestAnimationFrame(updateGame);
}

function resetBall() {
    ball.style.left = "50%";
    ball.style.top = "50%";
    ballSpeedX = -ballSpeedX;
}




updateGame();

// ... [rest of the previous code]

let leftPaddleSpeed = 0;
let rightPaddleSpeed = 0;
const PADDLE_SPEED = 4;

document.addEventListener('keydown', function(event) {
    switch (event.code) {
        case 'ArrowUp':
            rightPaddleSpeed = -PADDLE_SPEED;
            break;
        case 'ArrowDown':
            rightPaddleSpeed = PADDLE_SPEED;
            break;
        case 'KeyW':
            leftPaddleSpeed = -PADDLE_SPEED;
            break;
        case 'KeyS':
            leftPaddleSpeed = PADDLE_SPEED;
            break;
    }
});

document.addEventListener('keyup', function(event) {
    switch (event.code) {
        case 'ArrowUp':
        case 'ArrowDown':
            rightPaddleSpeed = 0;
            break;
        case 'KeyW':
        case 'KeyS':
            leftPaddleSpeed = 0;
            break;
    }
});

function updateGame() {
    // ... [rest of the previous code]

    // Update paddle positions
    leftPaddle.style.top = (leftPaddle.offsetTop + leftPaddleSpeed) + "px";
    rightPaddle.style.top = (rightPaddle.offsetTop + rightPaddleSpeed) + "px";

    // ... [rest of the previous code]
}

// ... [rest of the previous code]
