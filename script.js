/****************************************************** */

const container = document.getElementById('container');
const grid = document.getElementById('grid');
const DEFAULT_COLOR = "rgb(221, 209, 209)";

// create 16*16 divs
for (let i = 0; i < 16*16; i++) {
    var div = document.createElement("div");
    div.setAttribute("class", "block");
    grid.appendChild(div);
}

// Handle mouse over event to turn it black
grid.addEventListener("mouseover", (e) =>{
  let target = e.target;
  target.classList.add("block-hovered");
})


/****************************************************** */ 
function resetGrid(){
  let blocks = document.querySelectorAll(".block");
  blocks.forEach(element => {
    element.classList.remove("block-hovered");
  });
}
const resetButton = document.getElementById('grid-reset');
resetButton.addEventListener('click', resetGrid)

// Button that resets the grid size
const resizeButton = document.getElementById('grid-resize');
resizeButton.addEventListener('click', () => {
  // Shows an alert that asks for how many squares do they want
  let newGridSize = prompt("Enter the size of the grid, between 1 and 100 inclusive");
  createGrid(newGridSize);
})