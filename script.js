document.addEventListener("DOMContentLoaded", () => {
    createBoard(16);
    console.log("Hello World");
});

function createBoard(size) {
    let board = document.querySelector("#board");
    let numDivs = size * size;

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        div.style.backgroundColor = "yellow";
        board.appendChild(div);
    }
}