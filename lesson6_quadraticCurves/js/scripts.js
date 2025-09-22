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
  
    // quadraticCurveTo(controlX, controlY, endX, endY)
    context.beginPath();
    context.strokeStyle = 'red';
    context.lineWidth = 10;
    context.moveTo(200, 250);
    context.quadraticCurveTo(500,110,400,250);
    context.stroke();

    //bezierCurve(controlX1, controlY1, controlX2, controlY2, endX, endY)
    context.beginPath();
    context.strokeStyle = 'red';
    context.lineWidth = 10;
    context.moveTo(500, 550);
    context.bezierCurveTo(300, 300, 900, 400, 700, 550);
    context.stroke();

}

// Call resizeCanvas() when the window is resized
window.addEventListener('resize', resizeCanvas);

// initial draw
draw();