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
    Line Joins -> context.lineJoin = "miter|bevel|round";
    - miter -> default value
    - bevel
    - round
    */

    // first line -> miter
    context.beginPath();
    context.lineWidth = 20;
    context.lineJoin = 'miter';
    context.moveTo(30, 30);
    context.lineTo(430, 30);
    context.lineTo(430, 230);
    context.lineTo(50, 230);
    context.lineTo(50, 530);
    context.strokeStyle = 'green';
    context.stroke();

     // second line -> bevel
    context.beginPath();
    context.lineWidth = 20;
    context.lineJoin = 'bevel';
    context.moveTo(60, 60);
    context.lineTo(460, 60);
    context.lineTo(460, 260);
    context.lineTo(110, 260);
    context.lineTo(110, 560);
    context.strokeStyle = 'blue';
    context.stroke();

    // third line -> round
    context.beginPath();
    context.lineWidth = 20;
    context.lineJoin = 'round';
    context.moveTo(90, 90);
    context.lineTo(490, 90);
    context.lineTo(490, 290);
    context.lineTo(140, 290);
    context.lineTo(140, 590);
    context.strokeStyle = 'orange';
    context.stroke();


}

// Call resizeCanvas() when the window is resized
window.addEventListener('resize', resizeCanvas);

// initial draw
draw();