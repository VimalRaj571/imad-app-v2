console.log('Loaded!');

var img = document.getElementById('mini');

//make anim try put soome non static msg
var marginLeft= 0 ;
function moveRight(){                                                           //func1 to make add leftmargin ++
    marginLeft = marginLeft + 1 ;
    img.style.marginLeft =  marginLeft +'px';
    //img.style.marginLeft = '400px';
    
        }

img.onclick = function(){                                                       //func2 to make call the leftmargin ++
    var animate = setInterval(moveRight,50); // call moveRight in 20msec
};