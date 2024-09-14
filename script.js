/****************************************************** */

const container = document.getElementById('container');
let gridSize = 960;
createGrid(16);



/****************************************************** */ 
function resetGrid(){
  let blocks = document.querySelectorAll(".block");
  blocks.forEach(element => {
    element.classList.remove("block-hovered");
  });
}

function createGrid(n){
  let grid = document.createElement("div");
  grid.setAttribute("id", "grid");
  for (let i = 0; i < n*n; i++) {
    var div = document.createElement("div");
    div.style.width = `${gridSize/n}px`;
    div.style.height = `${gridSize/n}px`;
    div.setAttribute("class", "block");
    grid.appendChild(div);
  }
  container.append(grid);
  grid.addEventListener("mouseover", (e) =>{
    let target = e.target;
    target.classList.add("block-hovered");
  })
  
}

function modifyGrid(n){
  grid.remove();
  createGrid(n);
}
const resetButton = document.getElementById('grid-reset');
resetButton.addEventListener('click', resetGrid)

// Button that resets the grid size
const resizeButton = document.getElementById('grid-resize');
resizeButton.addEventListener('click', () => {
  // Shows an alert that asks for how many squares do they want
  let newGridSize = prompt("Enter the size of the grid, between 1 and 100 inclusive");
  modifyGrid(newGridSize);
})