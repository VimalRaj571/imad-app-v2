console.log('Loaded!');

var img = document.getElementById('mini');

//make anim try put soome non static msg
var marginLeft= 0 ;
function moveRight(){
    img.style.marginLeft =  marginLeft + 1 +'px';
    //img.style.marginLeft = '400px';
    
        }

img.onclick = function(){
    var animate = setInterval(moveRight,50); // call moveRight in 20msec
};