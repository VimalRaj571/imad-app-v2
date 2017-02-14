console.log('Loaded!');

var img = document.getElementById('mini');

//make anim try put soome non static msg
var marginLeft= 0 ;
function moveRight(){
    img.style.marginLeft =  marginLeft + 1 +'px';
    //img.style.marginLeft = '400px';
    
        }

img.onclick = function(){
    animate = setInterval(moveRight,20); // call moveRight in 20msec
};