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
    // define radian variable
    const radian = Math.PI / 180;
  
    // context.arc(centerX, centerY, radius, startAngle, endAngle, antiClockwiseDirection);
    context.beginPath();
    context.strokeStyle = 'red';
    context.lineWidth = 15;
    context.arc(500, 500, 150, 360 * radian, false);
    context.stroke();

}

// Call resizeCanvas() when the window is resized
window.addEventListener('resize', resizeCanvas);

// initial draw
draw();