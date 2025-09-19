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
    context.strokeStyle = 'red'; // draws a red line
    context.lineWidth = 10; // line thickness
    context.moveTo(30, 150); // moveTo(x,y) => starting point of the line
    context.lineTo(300, 150); // lineTo(x,y) => end point of the line
    context.stroke(); // draws the line

    //Draw a zig-zag line
    context.beginPath(); // reset the context state
    context.strokeStyle = 'red'; // draws a red line
    context.lineWidth = 10; // line thickness
    context.moveTo(50, 200); // moveTo(x,y) => starting point of the line
    context.lineTo(200, 400); // lineTo(x,y) => end point of the line
    context.lineTo(300, 200); // next point on line
    context.lineTo(450, 400);
    context.lineTo(550, 200);
    context.stroke(); // draws the line

}

// Call resizeCanvas() when the window is resized
window.addEventListener('resize', resizeCanvas);

// initial draw
draw();