

function createGridSquares(){
    createLineBreakDiv();
    for(let i=1; i<=16; i++){
        console.log("Hello world");
        const newGridSquare = document.createElement("div");
        newGridSquare.setAttribute("id", i);
        newGridSquare.setAttribute("class", "square");
        newGridSquare.innerText = `${i}`;
        document.body.appendChild(newGridSquare);
        if(i%4==0){
            createLineBreakDiv();
        }
    }
}
function createLineBreakDiv(){
    const lineBreakDiv = document.createElement("div");
    lineBreakDiv.setAttribute("class", "break");
    document.body.appendChild(lineBreakDiv);
}

createGridSquares();
