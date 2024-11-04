function makeGrid(rows, columns){
    const gridContainer = document.querySelector(".container");
    for (i = 0; i < rows; i++) {
        for (j = 0; j < columns; j++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");

        gridContainer.appendChild(grid);
        }
    }
}

makeGrid(16, 16);