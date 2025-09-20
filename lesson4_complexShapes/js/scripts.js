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
  
    /*
    lineCap = butt|round|square
    lineJoin = bevel|round|miter
    shadowColor = color of shadow
    shadowBlur = blur amount of shadows
    shadowOffsetX = horizontal distance of the shadow from the shape
    shadowOffsetY = vertical distance of the shadow from the shape
    */

    // First Z Object
    context.beginPath();
    context.strokeStyle = 'red';
    context.lineWidth = 15;
    context.moveTo(60, 80);
    context.lineTo(360, 80);
    context.lineTo(80, 280);
    context.lineTo(380, 280);
    context.stroke();

    // Second Z Object
    context.beginPath();
    context.strokeStyle = 'blue';
    context.lineWidth = 15;
    context.moveTo(860, 80);
    context.lineTo(560, 80);
    context.lineTo(860, 280);
    context.lineTo(540, 280);
    context.stroke();

    // Third Z Object
    context.beginPath();
    context.strokeStyle = 'red';
    context.lineWidth = 15;
    context.moveTo(60, 380);
    context.lineTo(360, 380);
    context.lineTo(80, 580);
    context.lineTo(380, 580);
    context.stroke();


}

// Call resizeCanvas() when the window is resized
window.addEventListener('resize', resizeCanvas);

// initial draw
draw();