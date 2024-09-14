// create 16*16 divs
const N = 16*16;
const container = document.getElementById('container');
const grid = document.getElementById('grid');
for (let i = 0; i < N; i++) {
    var div = document.createElement("div");
    div.setAttribute("class", "block");
    grid.appendChild(div);
}


// Handle mouse over event to turn it black
grid.addEventListener("mouseover", (e) =>{
  let target = e.target;
  target.style.backgroundColor = "black";
})