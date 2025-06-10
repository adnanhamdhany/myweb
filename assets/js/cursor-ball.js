const ball = document.querySelector('.cursor-ball');
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let ballX = mouseX;
let ballY = mouseY;

document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animate() {
    // The 0.04 value gives even more delay (slower follow)
    ballX += (mouseX - ballX) * 0.04;
    ballY += (mouseY - ballY) * 0.04;
    ball.style.transform = `translate(-50%, -50%) translate(${ballX}px, ${ballY}px)`;
    requestAnimationFrame(animate);
}
animate();