// font-style:
// - normal (the default)
// - italic
// - oblique
// - inherit (style comes from the parent element)

// font-weight:
// - normal (the default)
// - bold
// - bolder
// - lighter
// - 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
// - inherit (style comes from the parent element)

// font-size:
// - xx-small | x-small | small | smaller | medium | large | larger | x-large | xx-large
// - exact number in px (pixels), pt (points) or em (ems)
// - inherit;

// font-family:
// - family-name (like "times", "courier", "arial", ...)
// - generic-family (like "serif", "sans-serif", "cursive", "fantasy", "monospace", ...)
// - inherit (style comes from the parent element)

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

    // set initial font size
    context.font = "normal bolder xx-large courier";
    
    // context.fillText(text, xCoord, yCoord, maxWidth);
    const fText = "Test Text for Canvas";
    context.fillText(fText, 80, 100, 300);
    
    
    // context.strokeText(text, xCoord, yCoord, maxWidth);
    const sText = "Second Test Text";
    // set new font size
    context.font = "italic 700 80px fantasy";   
    context.strokeText(sText, 80, 500);
    
    

}

// Call resizeCanvas() when the window is resized
window.addEventListener('resize', resizeCanvas);

// initial draw
draw();