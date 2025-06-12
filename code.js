let gridSize = 16;

const mainContainer = document.querySelector(".container"); 

function createGrid() {
    for (let i = 0; i < gridSize; i++) {
        const loopDivRow = document.createElement("div")
        loopDivRow.classList.add("loop-div-row");
        mainContainer.appendChild(loopDivRow);

        for (let j = 0; j < gridSize; j++) {
            const loopDiv = document.createElement("div");
            loopDiv.classList.add("loop-div");
            loopDivRow.appendChild(loopDiv);
        }
    }
}

createGrid();

function randomRGBValue() {
    return Math.floor(Math.random() * 255);
}


function randomColor() {
    return `rgb(${randomRGBValue()}, ${randomRGBValue()}, ${randomRGBValue()})`;
}


function opacitySet(theTarget) {
    let currentOpacity = Number(theTarget.style.opacity) || 0;
    
    if (currentOpacity >= 1) {
        return 1;
    }

    return currentOpacity + 0.1;
}


mainContainer.addEventListener('mouseenter', (event) => {
    const target = event.target;

    if (target.classList.contains("loop-div-row") || (target.classList.contains("container"))) {
        return
    }
    else {
        target.style.backgroundColor = randomColor();
        target.style.opacity = opacitySet(target);
    }
}, true);


const changeGridSizeBtn = document.querySelector("#change-size-grid");
const resetBtn = document.querySelector("#reset");

changeGridSizeBtn.addEventListener('click', () => {
    gridSize = prompt("What grid size? (max. 100)");

    if (gridSize > 100) {
        alert("MAX ALLOWED SIZE OF GRID IS 100!")
        return;
    }

    mainContainer.innerHTML = '';
    createGrid();
});


resetBtn.addEventListener('click', () => {
    const allDivs = mainContainer.querySelectorAll('.loop-div');

    allDivs.forEach(div => {
        div.removeAttribute('style');
      });
});

