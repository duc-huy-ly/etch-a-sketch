/************ INITIAL PARAMETERS *********************** */

const container = document.getElementById('container');
let gridSize = 960;
createGrid(16);
let isDrawing = false; 

/****************************************************** */ 
document.addEventListener("mouseup", ()=>{
  isDrawing = false;
})

function resetGrid(){
  let blocks = document.querySelectorAll(".block");
  blocks.forEach(element => {
    element.classList.remove("block-hovered");
  });
}

function createGrid(n){
  let grid = document.createElement("div");
  grid.setAttribute("id", "grid");
  const newGridSize = gridSize/n;

  for (let i = 0; i < n*n; i++) {
    var div = document.createElement("div");
    div.style.width = `${newGridSize}px`;
    div.style.height = `${newGridSize}px`;
    div.setAttribute("class", "block");
    grid.appendChild(div);
  }
  container.append(grid);

  let blocks = document.querySelectorAll(".block");
  blocks.forEach(block => {
    block.addEventListener("mousedown", (e)=>{
      isDrawing=true;
      e.target.classList.add("block-hovered");
    })
    block.addEventListener("mouseover", (e) =>{
      if (isDrawing == true){
         e.target.classList.add("block-hovered");
      }
    })
  });
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
  if (newGridSize >= 100 || newGridSize <1){
    alert("Invalid size given");
    return;
  } 
  modifyGrid(newGridSize);
})