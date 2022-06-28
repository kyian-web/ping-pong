class Ping {
    constructor() {
        this.canvas = document.querySelector('#pong');
        this.context = this.canvas.getContext('2d');
        this.ball = {
            x: this.canvas.width / 2,
            y: this.canvas.height / 2,
            radius: 10,
            speed: 20,
            velocityX: 5,
            velocityY: 5,
            color: '#fff'
        }
    }

    drawRect(x, y, width, height, color) {
        this.context.beginPath();
        this.context.fillStyle = color;
        this.context.fillRect(x, y, width, height);
        this.context.closePath();
    }

    drawCircle(x, y, radius, color) {
        this.context.beginPath();
        this.context.fillStyle = color;
        this.context.arc(x, y, radius, 0, Math.PI*2, false);
        this.context.closePath();
        this.context.fill();
    }

    renderGame() {
        this.drawRect(0, 0, this.canvas.width, this.canvas.height, '#0660a0');
        this.drawCircle( this.ball.x, this.ball.y, this.ball.radius, this.ball.color);
    }

    update() {
        this.ball.x += this.ball.velocityX;
        this.ball.y += this.ball.velocityY;
    
        if (this.ball.y + this.ball.radius > this.canvas.height || this.ball.y - this.ball.radius < 0) {
            this.ball.velocityY = - this.ball.velocityY;
        } else if (this.ball.x + this.ball.radius > this.canvas.width || this.ball.x - this.ball.radius < 0) {
            this.ball.velocityX = -this.ball.velocityX;
        }
    }

    render() {
        setInterval(() => {
            this.renderGame();
            this.update();
        }, this.ball.speed)
    }
}

new Ping().render();



// ###########################################################

// const cvs = document.querySelector('#pong');
// const ctx = cvs.getContext('2d');

// const ball = {
//     x: cvs.width / 2,
//     y: cvs.height / 2,
//     radius: 10,
//     speed: 20,
//     velocityX: 5,
//     velocityY: 5,
//     color: '#fff'
// }

// function drawRect(x, y, width, height, color) {
//     ctx.beginPath();
//     ctx.fillStyle = color;
//     ctx.fillRect(x, y, width, height);
//     ctx.closePath();
// }

// function drawCircle(x, y, radius, color) {
//     ctx.beginPath();
//     ctx.fillStyle = color;
//     ctx.arc(x, y, radius, 0, Math.PI*2, false);
//     ctx.closePath();
//     ctx.fill();
// }

// function render() {
//     drawRect(0, 0, cvs.width, cvs.height, '#0660a0');
//     drawCircle(ball.x, ball.y, ball.radius, ball.color);
// }

// function update() {
//     ball.x += ball.velocityX;
//     ball.y += ball.velocityY;

//     if (ball.y + ball.radius > cvs.height || ball.y - ball.radius < 0) {
//         ball.velocityY = -ball.velocityY;
//     } else if (ball.x + ball.radius > cvs.width || ball.x - ball.radius < 0) {
//         ball.velocityX = -ball.velocityX;
//     }
// }

// function game() {
//     render();
//     update();
// }

// setInterval(game, ball.speed);

// ###################################

// const cvs = document.querySelector('#pong');
// const ctx = cvs.getContext('2d');

// // let img = new Image();
// // img.src = 'ball.png';

// const iconBall = {
//     src: 'ball.png',
//     x: cvs.width/2,
//     y: cvs.height/2,
//     width: 20,
//     height: 20,
//     speed: 20,
//     velocityX: 5,
//     velocityY: 5
// }

// function createBall(srcBall, x, y, width, height) {
//     let img = new Image();
//     img.src = srcBall;
//     ctx.drawImage(img, x, y, width, height);
// }

// const ball = {
//     x: cvs.width / 2,
//     y: cvs.height / 2,
//     radius: 10,
//     speed: 20,
//     velocityX: 5,
//     velocityY: 5,
//     color: '#fff'
// }

// function drawRect(x, y, width, height, color) {
//     ctx.beginPath();
//     ctx.fillStyle = color;
//     ctx.fillRect(x, y, width, height);
//     ctx.closePath();
// }

// function render() {
//     drawRect(0, 0, cvs.width, cvs.height, '#0660a0');
//     createBall(iconBall.src, iconBall.x, iconBall.y, iconBall.width, iconBall.height);
// }

// function update() {
//     iconBall.x += iconBall.velocityX;
//     iconBall.y += iconBall.velocityY;

//     if (iconBall.y + iconBall.width > cvs.height || iconBall.y - iconBall.width < 0) {
//         iconBall.velocityY = -iconBall.velocityY;
//     } else if (iconBall.x + iconBall.width > cvs.width || iconBall.x - iconBall.width < 0) {
//         iconBall.velocityX = -iconBall.velocityX;
//     }
// }

// function game() {
//     render();
//     update();
// }

// setInterval(game, iconBall.speed);