$(window).on('load', ()=>{
    let slider = $("#rangeBar");
    let output = $("#height").html(slider.val());
    
    drawPyramid(slider.val(), tackeSymbol());
    
    slider.on("input", () =>{    
        output.html(slider.val());
        clear();
        drawPyramid(slider.val(), tackeSymbol());
    });
    
    $("#symbol").on("input", () => {
        clear();
        drawPyramid(slider.val(), tackeSymbol());
    });
});

function tackeSymbol(){
    let symbolType = $("#symbol").val();
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
    var pyramid =  $("#pyramid");    
    for(var p = 1; p <= height; p++){
        var row = $('<div class="row">');              
        for(var j = 1; j <= (height - p); j++){            
            row.append("&nbsp;");                    
        } 
        for(var i = 0; i <= p; i++){
            row.append(symbol);  
        }            
        pyramid.append(row);
    } 
} 

function clear(){
    $("#pyramid").html(" "); 
}