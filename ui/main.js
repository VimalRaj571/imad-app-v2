console.log('Loaded!');

var img = document.getElementById('mini');

var marginLeft= 0 ;
function moveRight(){                                                           //func1 to make add leftmargin ++
    marginLeft = marginLeft + 1 ;
    img.style.marginLeft =  marginLeft +'px';
    //img.style.marginLeft = '400px';
}
        
img.onclick = function(){                                                       //func2 to make call the leftmargin ++
    var animate = setInterval(moveRight,50); // call moveRight in 20msec
};

//Counter CODE
var btn = document.getElementById('btn');
var span = document.getElementById('span_no');
var counter = 0;

btn.onclick = function(){
    
//Make the request to counter Endpoint

//Capture the response and store in the variable

//Render in the correct span
    counter = counter + 1;
    span.innerHTML = counter.toString();
};
