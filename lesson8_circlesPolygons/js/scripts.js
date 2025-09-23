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

    // define polygon variables
    const sides = 5;
    const radius = 100;
    let centerX = 300;
    let centerY = 300;
    const startAngle = 200;
    angle = (2 * Math.PI) / sides;
  
    // context.arc(centerX, centerY, radius, startAngle, endAngle, antiClockwiseDirection);
    context.beginPath();
    context.strokeStyle = 'red';
    context.fillStyle = 'red';
    context.lineWidth = 15;
    context.arc(800, 300, 150, 135 * radian, 360 * radian, false);
    context.stroke();
    context.fill();

    // draw polygon
    context.beginPath();
    context.strokeStyle = 'red';
    context.lineWidth = 5;
    context.lineJoin = 'round';

    // Beginning Point Coordinates
    const beginX = centerX + radius * Math.cos(startAngle);
    const beginY = centerY - radius * Math.sin(startAngle);

    // Draw Lines
    for(var i = 1; i <= sides; i++) {
        // Current point's coordinates
        const currentAngle = startAngle + i * angle;
        const currentPointX = centerX + radius * Math.cos(currentAngle);
        const currentPointY = centerY - radius * Math.sin(currentAngle);

        // Draw the line
        context.lineTo(currentPointX, currentPointY);
    }
    
    context.closePath();
    context.shadowColor = 'black';
    context.shadowOffsetX = 5;
    context.shadowOffsetY = 5;
    context.shadowBlur = 10;
    context.stroke();

    /* Shadow attributes on canvas
    - shadowColor
    - shadowOffsetX
    - shadowOffsetY
    - shadowBlur
    */

    // Rectangle
    context.beginPath();
    context.strokeStyle = 'green';
    context.fillStyle = 'green';
    context.shadowColor = 'black';
    context.shadowOffsetX = 5;
    context.shadowOffsetY = 5;
    context.shadowBlur = 5;
    context.rect(250, 700, 150, 400);
    context.stroke();
    context.fill();

    // Circle
    context.beginPath();
    context.strokeStyle = 'red';
    context.fillStyle = 'red';
    context.shadowColor = 'black';
    context.shadowOffsetX = -10;
    context.shadowOffsetY = 15;
    context.shadowBlur = 5;
    context.arc(750, 900, 100, 0 * radian, 360 * radian, false);
    context.stroke();
    context.fill();

}

// Call resizeCanvas() when the window is resized
window.addEventListener('resize', resizeCanvas);

// initial draw
draw();