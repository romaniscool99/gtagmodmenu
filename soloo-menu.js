// soloo-menu.js
const menu = document.getElementById("solooMenu");
const header = document.getElementById("menuHeader");
let offsetX = 0, offsetY = 0, isDragging = false;

header.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - menu.offsetLeft;
  offsetY = e.clientY - menu.offsetTop;
  header.style.cursor = "grabbing";
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  header.style.cursor = "grab";
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    menu.style.left = `${e.clientX - offsetX}px`;
    menu.style.top = `${e.clientY - offsetY}px`;
  }
});

// Action Functions for Buttons
function banPlayer() {
  alert('Player has been banned.');
  // Call WebSocket or API to ban the player
  console.log("Player banned.");
}

function kickPlayer() {
  alert('Player has been kicked.');
  // Call WebSocket or API to kick the player
  console.log("Player kicked.");
}

function freezePlayer() {
  alert('Player has been frozen.');
  // Call WebSocket or API to freeze the player
  console.log("Player frozen.");
}
