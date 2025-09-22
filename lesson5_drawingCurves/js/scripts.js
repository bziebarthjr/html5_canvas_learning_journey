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
    // definitions
   const radian = Math.PI / 180;
   /*
   arc(x, y, radius, startAngle, endAngle, counterClockWise)
   */

   // first arc
   context.beginPath();
   //context.moveTo(100,100)
   context.strokeStyle = 'blue';
   context.lineWidth = 10;
   context.arc(100, 100, 50, 0 * radian, 180 * radian, false);
   context.stroke();

   // second arc
   context.beginPath();
   //context.moveTo(300,200)
   context.strokeStyle = 'red';
   context.lineWidth = 10;
   context.arc(300, 200, 50, 45 * radian, 130 * radian, false);
   context.stroke();

   // third arc
   context.beginPath();
   //context.moveTo(300,200)
   context.strokeStyle = 'green';
   context.lineWidth = 10;
   context.arc(300, 100, 50, 45 * radian, 130 * radian, true);
   context.stroke();


}

// Call resizeCanvas() when the window is resized
window.addEventListener('resize', resizeCanvas);

// initial draw
draw();