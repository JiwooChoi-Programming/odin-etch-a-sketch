document.addEventListener("DOMContentLoaded", () => {
    createBoard(16);

    const popup = document.querySelector("#popup");
    popup.addEventListener("click", () => {
        let size = getSize();
        createBoard(size);
    });

    console.log("Hello World");
});

function createBoard(size) {
    const board = document.querySelector("#board");
    const numDivs = size * size;

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "black";
        })
        board.appendChild(div);
    }
}

function getSize() {
    const input = prompt("What will be the size of the board?");
    const message = document.querySelector("#message");

    if (input === "") {
        message.textContent = "Please provide a number";
    } else if (input < 1 || input > 100) {
        message.textContent = "Provide a number between 1 and 100"
    } else {
        message.textContent = "Now you draw!"
        return input;
    }
}