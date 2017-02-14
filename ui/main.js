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

//var counter = 0;

btn.onclick = function(){
    
//Create request Obj
var request = new XMLHttpRequest();

//Capture the response and store in the variable

request.onreadystatechange = function(){
    if(request.readyState === XMLHttpRequest.DONE){
        //Take some Action 
        if(request.status === 200){
            //Render in the correct span
            var counter = request.responseText;
            //counter = counter + 1;
            var span = document.getElementById('span_no');
            span.innerHTML = counter.toString();
            }
        }
    };
    //Make Req
    request.open('GET', 'http://vimalraj571.imad.hasura-app.io/counter', true);
    request.send(null);
};