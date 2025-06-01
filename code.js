let gridSize = 16;

const mainContainer = document.querySelector(".container"); 


function createGrid () {
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


mainContainer.addEventListener('mousemove', (event) => {

    const target = event.target;

    if (target.classList.contains("loop-div-row") || (target.classList.contains("container"))) {
        return
    }

    else {
        target.style.backgroundColor = "lightblue"
    }
});