document.addEventListener("DOMContentLoaded", ()=>{
    let slider = document.getElementById("rangeBar");
    let output = document.getElementById("height");
    output.innerHTML = slider.value; 
    drawPyramid(slider.value, tackeSymbol());
    
    slider.addEventListener("input", function(){    
        output.innerHTML = this.value;
        clear();
        drawPyramid(slider.value, tackeSymbol());
    });
    
    document.querySelector("#symbol").addEventListener("input", () => {
        clear();
        drawPyramid(slider.value, tackeSymbol());
    });
});

function tackeSymbol(){
    let symbolType = document.querySelector("#symbol").value;
    let symbol = '';
    switch (symbolType) {
        case '#':
            symbol = '\u0023';
            break;
        case '@':
            symbol = '\u0040';
            break;
        case '$':
            symbol = '\u0024';
            break;
        case 'X':
            symbol = '\u0058';
            break;    
        default:
            break;
    }
    return symbol;   
}

function drawPyramid(height, symbol){
    var pyramid =  document.querySelector("#pyramid");    
    for(var p = 1; p <= height; p++){
        var row = document.createElement("div");
        row.classList.add("row");       
        for(var j = 1; j <= (height - p); j++){            
            row.innerHTML += "&nbsp";                    
        } 
        for(var i = 0; i <= p; i++){
            row.innerHTML += symbol;  
        }            
        pyramid.appendChild(row);
    } 
} 

function clear(){
    document.querySelector("#pyramid").innerHTML = ""; 
}