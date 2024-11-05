let buttonContainer = document.querySelector("button");
let gridContainer = document.querySelector(".container");

buttonContainer.addEventListener("click", () => {
    restartGrid();
})

function restartGrid() {
    let number = prompt("How would you like the grid size (1 - 100)", "100");
    gridContainer.style.gridTemplateRows = `repeat${number}, 1fr`;
    gridContainer.style.gridTemplateColumns = `repeat${number}, 1fr`;
    createGrid(number);
}

restartGrid();