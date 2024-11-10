let color = "black";
let click = false;

document.addEventListener("DOMContentLoaded", () => {
    createBoard(16);

    document.querySelector("body").addEventListener("click", (event) => {
        if (event.target.tagName !== "BUTTON") {
            click = !click;
            let draw = document.querySelector("#draw");

            if (click === true) {
                draw.textContent = "Now you can Draw";
            } else {
                draw.textContent = "You cannot draw yet";
            }
        }
    });

    const popup = document.querySelector("#popup");
    popup.addEventListener("click", () => {
        let size = getSize();
        createBoard(size);
        resetBoard();
    });
});

function createBoard(size) {
    const board = document.querySelector("#board");
    const numDivs = size * size;

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv);
        board.appendChild(div);
    }
}

function getSize() {
    const input = prompt("What will be the size of the board?");
    const message = document.querySelector("#message");

    if (input === "") {
        message.textContent = "Please provide a number";
    } else if (input < 1 || input > 100) {
        message.textContent = "Provide a number between 1 and 100";
    } else {
        message.textContent = "Now you draw!";
        return input;
    }
}

function colorDiv() {
    if (click) {
        if (color === "random") {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            this.style.opacity = 0.5;
        } else if (color === "opacity") {
            this.style.opacity = 1;
        } else {
            this.style.backgroundColor = "black";
            this.style.opacity = 0.5;
        }
    }
}

function setColor(colorChoice) {
    color = colorChoice;
}

function resetBoard() {
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => {
        div.style.backgroundColor = "white";
    })
}