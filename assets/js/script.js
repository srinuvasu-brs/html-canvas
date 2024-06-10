document.addEventListener('DOMContentLoaded', (event) => {
    const canvas = document.getElementById('drawingCanvas');
    const ctx = canvas.getContext('2d');
    const clearButton = document.getElementById('clearCanvas');
    const colorPicker = document.getElementById('colorPicker');
    let drawing = false;
    let currentColor = '#000000';
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    // Update current color
    colorPicker.addEventListener('input', (e) => {
        currentColor = e.target.value;
    });

    // Start drawing
    canvas.addEventListener('mousedown', (e) => {
        drawing = true;
        ctx.beginPath();
        ctx.moveTo(e.offsetX, e.offsetY);
    });

    // Draw
    canvas.addEventListener('mousemove', (e) => {
        if (drawing) {
            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.strokeStyle = currentColor;
            ctx.stroke();
        }
    });

    // Stop drawing
    canvas.addEventListener('mouseup', () => {
        drawing = false;
        ctx.closePath();
    });

    // Clear canvas
    clearButton.addEventListener('click', () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });
});


// Default theme
let chathams_blue = "#8D6E63";


// Set theme
function setTheme(theme) {
  document.documentElement.style.setProperty("--primary-color", theme);
  localStorage.setItem("movie-theme", theme);
}
setTheme(localStorage.getItem("movie-theme") || chathams_blue);

console.log("hello world");

let num = 10;
num == 10;

function addNum(a = 10, b = 20) {
  return a + b;
}
