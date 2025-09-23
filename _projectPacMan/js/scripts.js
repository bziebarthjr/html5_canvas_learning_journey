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

    // define radian
    const radian = Math.PI / 180;

    // My Attempt to Figure Out the Project
    // Body
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 10;
    context.moveTo(250,250);
    context.lineTo(330, 310);
    context.arc(250, 250, 100, 37 * radian, 330 * radian, false);
    context.lineTo(250,250);
    context.stroke();

    // Fill bottom half
    context.beginPath();
    context.strokeStyle = 'yellow';
    context.fillStyle = 'yellow';
    context.arc(250, 250, 90, 40 * radian, 215 * radian, false);
    context.fill();
    context.stroke();

    // Fill Top half
    context.beginPath();
    context.strokeStyle = 'yellow';
    context.fillStyle = 'yellow';
    context.arc(250, 250, 90, -35 * radian, -210 * radian, true);
    context.fill();
    context.stroke();

    // Draw Eye
    context.beginPath();
    context.strokeStyle = 'black';
    context.fillStyle = 'black';
    context.arc(265, 200, 10, 360 * radian, false);
    context.fill();
    context.stroke();

    // Instructor's Solution
    // Body
    context.beginPath();
    context.strokeStyle = 'black';
    context.fillStyle = 'yellow';
    context.lineWidth = 10;
    context.moveTo(250,550);
    context.lineTo(330, 610);
    context.arc(250, 550, 100, 37 * radian, 330 * radian, false);
    context.lineTo(250,550);
    context.stroke();
    context.fill();

    // Draw Eye
    context.beginPath();
    context.strokeStyle = 'black';
    context.fillStyle = 'black';
    context.arc(265, 500, 10, 360 * radian, false);
    context.fill();
    context.stroke();

} 

// Call resizeCanvas() when the window is resized
window.addEventListener('resize', resizeCanvas);

// initial draw
draw();