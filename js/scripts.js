// Definitions
const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

// set initial canvas size
resizeCanvas();

// Function to resize the canvas to fit the window
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
        
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

    // 
}

// Call resizeCanvas() when the window is resized
window.addEventListener('resize', resizeCanvas);

// inital draw
draw();