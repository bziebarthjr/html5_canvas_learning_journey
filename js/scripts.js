// Definitions
const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

// set initial canvas size
resizeCanvas();

// Function to resize the canvas to fit the window
function resizeCanvas() {
    canvas.width = window.innerWidth / 1.25;
    canvas.height = window.innerHeight / 1.25;
        
    // Redraw content or handle other operations after resizing
    draw();
}

// Function to draw on the canvas
function draw() {
    // Blue rectangle
    context.fillStyle = "blue";
    context.fillRect(10, 40, 30, 70);

    // Yellow Rectangle
    context.fillStyle = "yellow";
    context.fillRect(50, 30, 60, 30);

    // Draw line steps
    context.beginPath(); // reset the context state
    context.moveTo(50, 300); // moveTo(x,y) => starting point of the line
    context.lineTo(300, 300); // lineTo(x,y) => end point of the line
    context.stroke(); // draws the line
}

// Call resizeCanvas() when the window is resized
window.addEventListener('resize', resizeCanvas);

// initial draw
draw();