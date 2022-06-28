const cvs = document.querySelector('#pong');
const ctx = cvs.getContext('2d');

const ball = {
    x: cvs.width / 2,
    y: cvs.height / 2,
    radius: 10,
    speed: 20,
    velocityX: 5,
    velocityY: 5,
    color: '#fff'
}

function drawRect(x, y, width, height, color) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
    ctx.closePath();
}

function drawCircle(x, y, radius, color) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x, y, radius, 0, Math.PI*2, false);
    ctx.closePath();
    ctx.fill();
}

function render() {
    drawRect(0, 0, cvs.width, cvs.height, '#0660a0');
    drawCircle(ball.x, ball.y, ball.radius, ball.color);
}

function update() {
    ball.x += ball.velocityX;
    ball.y += ball.velocityY;

    if (ball.y + ball.radius > cvs.height || ball.y - ball.radius < 0) {
        ball.velocityY = -ball.velocityY;
    } else if (ball.x + ball.radius > cvs.width || ball.x - ball.radius < 0) {
        ball.velocityX = -ball.velocityX;
    }
}

function game() {
    render();
    update();
}

setInterval(game, ball.speed);