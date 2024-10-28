var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var stars = [],
    starCount = (canvas.width * canvas.height) / 1800000 * 100, // Number of stars
    mouse = { x: 0, y: 0 },
    maxDistance = 150; // Distance threshold for line connections

// Initialize stars
for (let i = 0; i < starCount; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1 + 1,
        vx: (Math.random() - 0.5) * 50,
        vy: (Math.random() - 0.5) * 50
    });
}

// Draw stars and connections
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = "lighter";

    ctx.lineWidth = 0.05;
    ctx.strokeStyle = 'white';

    for (let i = 0; i < starCount; i++) {
        let s = stars[i];
        
        // Draw star
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
        ctx.fill();

        // Draw lines between stars within the max distance
        for (let j = i + 1; j < starCount; j++) {
            let s2 = stars[j];
            let dist = distance(s, s2);
            if (dist < maxDistance) {
                ctx.beginPath();
                ctx.moveTo(s.x, s.y);
                ctx.lineTo(s2.x, s2.y);
                ctx.stroke();
            }
        }
        
        // Connect to mouse if within max distance
        if (distance(mouse, s) < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(s.x, s.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        }
    }
}

// Calculate distance between two points
function distance(point1, point2) {
    return Math.hypot(point2.x - point1.x, point2.y - point1.y);
}

// Update star positions
function update() {
    for (let s of stars) {
        s.x += s.vx / 60;
        s.y += s.vy / 60;

        if (s.x < 0 || s.x > canvas.width) s.vx *= -1;
        if (s.y < 0 || s.y > canvas.height) s.vy *= -1;
    }
}

canvas.addEventListener('mousemove', function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

// Animation loop
function tick() {
    draw();
    update();
    requestAnimationFrame(tick);
}

tick();
