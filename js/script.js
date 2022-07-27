const gridDiv = document.getElementById("grid");
let gridSize = 5;
const changeGridSizeButton = document.querySelector('#changeGridSize')

function createGridSquares(gridSize){
    for(let i=1; i<= gridSize**2 ; i++){
        console.log("Hello world");
        const newGridSquare = document.createElement("div");
        newGridSquare.setAttribute("id", i);
        newGridSquare.setAttribute("class", "square");
        let dimension = 500/gridSize;
        newGridSquare.style.width=`${dimension}px`
        newGridSquare.style.height=`${dimension}px`
        if(gridSize < 20){
        newGridSquare.innerText = `${i}`;}
        gridDiv.appendChild(newGridSquare);
        if(i%gridSize==0){
            createLineBreakDiv();
        }
    }
}
function createLineBreakDiv(){
    const lineBreakDiv = document.createElement("div");
    lineBreakDiv.setAttribute("class", "break");
    gridDiv.appendChild(lineBreakDiv);
}

function askForGridSize(){
    const gridSize = +prompt("Enter grid size 1-100","enter a number 1 - 100")
    if(gridSize > 100){
        console.log("too big")
    }
    if(gridSize < 1){
        console.log("too small")
    }
    else{
        return gridSize;
    }
}

changeGridSizeButton.addEventListener(
    'click', () => {
        newGridSize = askForGridSize();
        if(newGridSize){
            while (gridDiv.lastElementChild) {
                gridDiv.removeChild(gridDiv.lastElementChild);
            }        
        }
        createGridSquares(newGridSize);
    }
)

createGridSquares(gridSize);
