console.log('Loaded!');

var img = document.getElementById('mini');

//make anim try put soome non static msg
marginLeft= 0 ;
function moveRight(){
    img.style.marginLeft =  marginLeft + 1 +'px';
    //img.style.marginLeft = '400px';
    
        }

img.onclick = function(){
    animate = setTimeout(moveRight,20); // call moveRight in 20msec
};