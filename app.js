const container = document.querySelector(".container");
const resetBtn = document.getElementById("reset");
const input = document.querySelector("input");
const rainbowBtn = document.getElementById("rainbow");
const blackBtn = document.getElementById("black");
let rainbowMod = false;

function getRandomNumber() {
  return Math.ceil(Math.random() * 255);
}

function makeRandomColor() {
  return `rgb(${getRandomNumber()}, ${getRandomNumber()},${getRandomNumber()})`;
}

function createGrid(size = 16) {
  for (let i = 0; i < size * size; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${500 / size}px`;
    square.style.height = `${500 / size}px`;
    container.appendChild(square);
  }
}

function getPainted(e) {
  const target = e.target;
  if (!rainbowMod) {
    target.classList.add("painted");
  } else if (rainbowMod) {
    target.style.backgroundColor = makeRandomColor();
  }
}

function reStart() {
  container.innerHTML = "";
  rainbowMod = false;
  let size = parseInt(input.value) || 16;
  createGrid(size);
}

function makeRainBow() {
  rainbowMod = true;
}
function doBlack() {
  rainbowMod = false;
}

function reSize(e) {
  if (e.key === "Enter") {
    reStart();
  }
}

createGrid();
input.addEventListener("keydown", reSize);
blackBtn.addEventListener("click", doBlack);
rainbowBtn.addEventListener("click", makeRainBow);
resetBtn.addEventListener("click", reStart);

container.addEventListener("mouseover", getPainted);
