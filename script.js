// create 16 divs
const container = document.getElementById('container');
for (let index = 0; index < 16; index++) {
  for (let index = 0; index < 16; index++) {
    var div = document.createElement("div");
    div.setAttribute("class", "block");
    container.appendChild(div);
    
  }
}