const angleA = document.getElementById('angleX');
const angleB = document.getElementById('angleY');
const angleC = document.getElementById('angleZ');

const angles = [];

// Drawing the triangle
function draw() {
    let canvas = document.getElementById('grid');
    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.moveTo(100, 100);
        ctx.lineTo(100, 250);
        ctx.lineTo(250, 250);
        ctx.lineTo(100, 100);
        ctx.stroke();
    }
}

// Generate random numbers for the triangle on load/ refresh
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// Add angles to array
function appendCoords() {
    const angles = document.getElementById('vertices').elements;
    // angles.forEach(element => console.log(element));

    Array.prototype.forEach.call(angles.input, input => {
        console.log(input);
    })
    console.log(angles);
}

console.log(getRandomInt(100));
// Event listener
document.getElementById('changeCoords').addEventListener('click', appendCoords);

