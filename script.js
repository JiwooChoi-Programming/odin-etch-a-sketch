function createGrid(rows, columns){
    const gridContainer = document.querySelector(".container");
    for (i = 0; i < rows; i++) {
        for (j = 0; j < columns; j++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        grid.addEventListener('mouseover', (color) => {
            color.target.classList.add('green');
        });

        gridContainer.appendChild(grid);
        }
    }
}

createGrid(16, 16);