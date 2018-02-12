const container = document.querySelector('.container');

//default board and color..when user enters the page
defaultGrid(16);

sketch();


//buttons
const blackButton = document.querySelector('#black');
const rainbowButton = document.querySelector('#rainbow');
const customizeButton = document.querySelector('#newgrid')
const clearButton = document.querySelector('#clear');
const eraserButton = document.querySelector('#eraser');
const randomButton = document.querySelector('#random');

//customize button

customizeButton.addEventListener('click', (e) => {
    clearGrid();
    let num = document.querySelector('input').value;
    if (isNaN(num) || num > 100) {
        alert("ERROR! Please enter any number from 1-100");
        document.querySelector('input').value = 16;
        defaultGrid(16);
        sketch();
    } else {
        defaultGrid(num);
        sketch();

    }
});

// insert clear button code here


clearButton.addEventListener('click', (e) => {
    let gridSquares = document.querySelectorAll('.square');
    gridSquares.forEach((item) => {
        item.style.backgroundColor = "white";
    });
    sketch();
});



//selected color

function sketch(selectedColor) {
    let gridSquares = document.querySelectorAll('.square');
    gridSquares.forEach((item) => {
        item.addEventListener('mouseover', (e) => {
            // if (selectedColor == undefined) {
            //   item.style.backgroundColor = 'rgb(0, 0, 0, 1)';
            //    } else {
            item.style.backgroundColor = selectedColor;

        });
    });
}
// });

//}


//black color

blackButton.addEventListener('click', (e) => {
    sketch("black");
});



//eraser button

eraserButton.addEventListener('click', (e) => {
    sketch("white");
});


//random color

randomButton.addEventListener('click', (e) => {
    let randomColor = getRandomColor();
    sketch(randomColor);
});


//rainbow colors

rainbowButton.addEventListener('click', (e) => {
    let gridSquares = document.querySelectorAll('.square');
    gridSquares.forEach((item) => {
        item.addEventListener('mouseover', (e) => {
            item.style.backgroundColor = getRandomColor();
        });
    });
});


//how to get rainbow colors 

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let x = 0; x < 6; x++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


//board

function defaultGrid(num) {
    if (num == undefined) return;
    for (let i = 0; i < num; i++) {
        createRow(num);
    }
}

function createRow(num) {
    let width = 1000 / num;
    for (let i = 0; i < num; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.cssText = `width: ${width}px; height: ${width}px`;
        container.appendChild(square);
    }
}


function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}