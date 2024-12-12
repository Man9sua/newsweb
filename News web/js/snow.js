let canvas = document.getElementsByClassName('snow')[0];
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

function randomNum(max, min) {
    return Math.random() * (max - min) + min;
}

function Snowflake(x, y, radius, velocityX, velocityY, opacity) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
    this.opacity = opacity;

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = "rgba(255, 255, 255, " + this.opacity + ")";
        c.fill();
        c.closePath();
    };

    this.update = function() {
        this.x += this.velocityX;
        this.y += this.velocityY;

        // Reset snowflake position when it moves out of bounds
        if (this.y > canvas.height || this.x > canvas.width || this.x < 0) {
            this.x = randomNum(canvas.width, 0);
            this.y = randomNum(-20, -100);
            this.radius = randomNum(3, 1);
            this.velocityX = randomNum(1, -1);
            this.velocityY = randomNum(2, 0.5);
            this.opacity = randomNum(1, 0.5);
        }

        this.draw();
    };
}

let snowArray = [];

for (let i = 0; i < 200; i++) {
    let snowX = randomNum(canvas.width, 0);
    let snowY = randomNum(canvas.height, -canvas.height);
    let snowRadius = randomNum(3, 1);
    let snowVelocityX = randomNum(1, -1);
    let snowVelocityY = randomNum(2, 0.5);
    let snowOpacity = randomNum(1, 0.5);

    snowArray.push(new Snowflake(snowX, snowY, snowRadius, snowVelocityX, snowVelocityY, snowOpacity));
}

function animateSnow() {
    requestAnimationFrame(animateSnow);
    c.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < snowArray.length; i++) {
        snowArray[i].update();
    }
}

animateSnow();
