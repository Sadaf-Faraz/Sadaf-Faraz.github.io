const container = document.querySelector('.container');
const resetbtn = document.querySelector('#resetgrid');
const cell = document.querySelector('.square');


let currentGrid;
document.getElementById("resetgrid").onclick = function() {
    newGrid(prompt("Please enter a value from 1-100"));
};


//change background color of divs in grid
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let x = 0; x < 6; x++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function newGrid(gridsize = 16) {
    clearGrid();
    currentGrid = gridsize;
    document.body.style.setProperty('--columnNumber', gridsize);
    for (i = 0; i < gridsize * gridsize; i++) {
        let newdiv = document.createElement('div');
        newdiv.classList.add('square');
        newdiv.addEventListener("mouseover", function() {
            newdiv.style.backgroundColor = getRandomColor();
        })
        container.appendChild(newdiv);
    }

    function clearGrid() {
        while (container.hasChildNodes()) {
            container.removeChild(container.lastChild);
        }
    }
}
newGrid();