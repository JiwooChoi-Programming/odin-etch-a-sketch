let gridContainer = document.querySelector(".container");

function createGrid(size) {
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        let square = document.createElement("div");
        square.style.backgroundColor = "white";
        gridContainer.appendChild(square);

        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
        });

        function clearGrid() {
            buttonContainer.addEventListener("click", () => {
                square.style.backgroundColor = "white";
            })
        }

        clearGrid();
    }
}


let buttonContainer = document.querySelector("button");
buttonContainer.addEventListener("click", () => {
    restartGrid();
})

function restartGrid() {
    let number = prompt("How would you like the grid size (1 - 100)", "100");
    gridContainer.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    gridContainer.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    createGrid(number);
}

createGrid(16);