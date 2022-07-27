const gridDiv = document.getElementById("grid");

function createGridSquares(){
    createLineBreakDiv();
    for(let i=1; i<=16; i++){
        console.log("Hello world");
        const newGridSquare = document.createElement("div");
        newGridSquare.setAttribute("id", i);
        newGridSquare.setAttribute("class", "square");
        newGridSquare.innerText = `${i}`;
        gridDiv.appendChild(newGridSquare);
        if(i%4==0){
            createLineBreakDiv();
        }
    }
}
function createLineBreakDiv(){
    const lineBreakDiv = document.createElement("div");
    lineBreakDiv.setAttribute("class", "break");
    gridDiv.appendChild(lineBreakDiv);
}

createGridSquares();
