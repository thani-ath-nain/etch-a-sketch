const originalRows = 16;
const originalColumns = 16;

const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(originalRows , originalColumns);
function removeGrid() {
  while(container.firstChild) {
    container.removeChild(container.lastChild);
  }
  
}
const button = document.getElementById('resetButton');
button.addEventListener("click" , function(e) {
  let inp = prompt("Please Enter The Size of New Grid");
  removeGrid();
  makeRows(inp , inp);
} );