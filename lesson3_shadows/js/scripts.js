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
    Shadow attributes on canvas
    - shadowColor
    - shadowOffsetX
    - shadowOffsetY
    - shadowBlur
    */

    // draw line 1
    context.beginPath();
    // Set the shadow attributes
    context.strokeStyle = 'red';
    context.lineWidth = 20;
    context.shadowColor = 'blue';
    context.shadowOffsetX = 10;
    context.shadowOffsetY = 10;
    context.shadowBlur = 10;
    // Draw the line
    context.moveTo(100, 100);
    context.lineTo(400,100);
    context.stroke();

    // draw line 2
    context.beginPath();
    // Set the shadow attributes
    context.strokeStyle = 'red';
    context.lineWidth = 20;
    context.shadowColor = 'green';
    context.shadowOffsetX = -10;
    context.shadowOffsetY = 10;
    context.shadowBlur = 10;
    // Draw the line
    context.moveTo(600, 100);
    context.lineTo(900,100);
    context.stroke();

    // draw line 3
    context.beginPath();
    // Set the shadow attributes
    context.strokeStyle = 'red';
    context.lineWidth = 20;
    context.shadowColor = 'yellow';
    context.shadowOffsetX = 10;
    context.shadowOffsetY = -10;
    context.shadowBlur = 10;
    // Draw the line
    context.moveTo(100, 300);
    context.lineTo(400,300);
    context.stroke();

    // draw line 4
    context.beginPath();
    // Set the shadow attributes
    context.strokeStyle = 'red';
    context.lineWidth = 20;
    context.shadowColor = 'brown';
    context.shadowOffsetX = -10;
    context.shadowOffsetY = -10;
    context.shadowBlur = 10;
    // Draw the line
    context.moveTo(600, 300);
    context.lineTo(900, 300);
    context.stroke();

}

// Call resizeCanvas() when the window is resized
window.addEventListener('resize', resizeCanvas);

// initial draw
draw();