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
  
    // context.rect(xCoordinate, yCoordinate, width, height)
    context.strokeStyle = 'green';
    context.lineWidth = 11;
    context.lineJoin = 'round';
    context.fillStyle = '#99ccff';
    context.rect(50, 50, 400, 200);
    context.stroke();
    context.fill();

    // context.fillRect(xCoordinate, yCoordinate, width, height)
    context.fillStyle = "green";
    context.fillRect(600, 50, 400, 200);

    // context.strokeRect(xCoordinate, yCoordinate, width, height)
    context.lineWidth = 3;
    context.strokeStyle = 'blue';
    context.lineJoin = 'square';
    context.strokeRect(50, 350, 400, 200);
    
    //context.clearRect(xCoordinate, yCoordinate, width, height)
    // this will clean the whole canvas when uncommented
    // context.clearRect(0, 0, canvas.width, canvas.height);
}

// Call resizeCanvas() when the window is resized
window.addEventListener('resize', resizeCanvas);

// initial draw
draw();