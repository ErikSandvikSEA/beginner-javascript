// select elements of page - canvas, shake button

const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');
const MOVE_AMOUNT = 10;
// setup our canvas for drawing

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

// make variables for width & height from the same properties on the canvas
const { width, height } = canvas; // destructuring

// random x and y starting points on the canvas
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath(); // start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// write a draw function

function draw({ key }) {
  console.log(key);

  // increment hue
  hue += 4;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  // start path
  ctx.beginPath();
  ctx.moveTo(x, y);
  // move x and y value
  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}

// write a handler for the keys

function handleKey(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault();
    draw({ key: e.key });
  }
}

// clear/shake function

function clearCanvas() {
  canvas.classList.add('shake');

  canvas.addEventListener(
    'animationend',
    function() {
      canvas.classList.remove('shake');
    },
    { once: true }
  );
  ctx.clearRect(0, 0, width, height);
}

// listen for arrow keys
window.addEventListener('keydown', handleKey);
shakeButton.addEventListener('click', clearCanvas);
