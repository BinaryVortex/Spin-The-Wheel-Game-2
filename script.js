const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");
const spinBtn = document.getElementById("spin");

const spinSound = new Audio('spin-sound.mp3'); // Add sound file URL
const winSound = new Audio('win-sound.mp3');

const segments = [
  { text: "$100" },
  { text: "$200" },
  { text: "$300" },
  { text: "$400" },
  { text: "$500" },
  { text: "$600" },
  { text: "$700" },
  { text: "$800" },
];

// Generate random colors for each segment
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

segments.forEach(segment => {
  segment.color = getRandomColor(); // Assign random colors dynamically
});

let startAngle = 0;
const arc = Math.PI / (segments.length / 2);
let spinTimeout = null;
let spinAngleStart = 10;
let spinTime = 0;
let spinTimeTotal = 0;

function drawWheel() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  segments.forEach((segment, i) => {
    const angle = startAngle + i * arc;
    ctx.beginPath();
    ctx.fillStyle = segment.color;
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.arc(
      canvas.width / 2,
      canvas.height / 2,
      canvas.width / 2,
      angle,
      angle + arc
    );
    ctx.fill();

    // Draw text
    ctx.save();
    ctx.translate(
      canvas.width / 2 + Math.cos(angle + arc / 2) * (canvas.width / 3),
      canvas.height / 2 + Math.sin(angle + arc / 2) * (canvas.height / 3)
    );
    ctx.rotate(angle + arc / 2 + Math.PI / 2);
    ctx.font = "bold 18px 'Helvetica Neue', Arial, sans-serif"; // Improved font
    ctx.fillStyle = "#fff";
    ctx.fillText(segment.text, -ctx.measureText(segment.text).width / 2, 0);
    ctx.restore();
  });
}

function rotateWheel() {
  spinTime += 30;
  if (spinTime >= spinTimeTotal) {
    stopRotateWheel();
    return;
  }
  const spinAngle = spinAngleStart - easeOutCubic(spinTime, 0, spinAngleStart, spinTimeTotal);
  startAngle += (spinAngle * Math.PI) / 180;
  drawWheel();
  spinTimeout = setTimeout(rotateWheel, 30);
}

function stopRotateWheel() {
  clearTimeout(spinTimeout);
  const degrees = (startAngle * 180) / Math.PI + 90;
  const arcd = (arc * 180) / Math.PI;
  const index = Math.floor((360 - (degrees % 360)) / arcd);

  // Highlight the winning segment
  segments[index].color = "#FFD700"; // Gold color for winning segment
  drawWheel(); // Redraw the wheel with updated color
  winSound.play(); // Play win sound

  // Show the winning result after a delay
  setTimeout(() => {
    alert("You won: " + segments[index].text);
  }, 500);
}

// Ease out cubic for smoother spin deceleration
function easeOutCubic(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t + 1) + b;
}

spinBtn.addEventListener("click", () => {
  spinSound.play(); // Play spin sound
  spinAngleStart = Math.random() * 10 + 10;
  spinTime = 0;
  spinTimeTotal = Math.random() * 3000 + 4000;
  rotateWheel();
});

drawWheel();
