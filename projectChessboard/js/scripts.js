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
    // define variables
    const lightCellColor = "#ddb180";
    const darkCellColor = "#7c330C";
    const size = 100;
    const rows = 8
    const cols = 8;
    const ox = 100;
    const oy = 100;

    // Draw Frame
    context.strokeStyle = 'black';
    context.strokeRect(ox, oy, cols * size, rows * size);

    // Draw and Color Cells
    for (let r = 0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            const isDark = (r + c) % 2 === 0;
            context.fillStyle = isDark ? darkCellColor : lightCellColor;
            context.fillRect(ox + c * size, oy + r * size, size, size);
        }
    }
} 

// Call resizeCanvas() when the window is resized
window.addEventListener('resize', resizeCanvas);

// initial draw
draw();