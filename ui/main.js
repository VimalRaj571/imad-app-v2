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


//Submit Username/Password

var submit = document.getElementById('submit_btn');

submit.onclick = function(){

var request = new XMLHttpRequest();

//Capture the response and store in the variable

request.onreadystatechange = function(){
    if(request.readyState === XMLHttpRequest.DONE){
        //Take some Action 
        if(request.status === 200){
                console.log('user is logged in');
                alert('Logged in successfully');
            } else if (request.status === 403){
                alert('Username or password is incorrect');    
            } else if (request.status === 500){
                alert('Something else');
            }
        }
    };
    //Make Req
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST', 'http://vimalraj571.imad.hasura-app.io/login', true);
    request.setRequestHeader('Content-Type','application/json');
    request.send(JSON.stringify({username : username , password : password}));

};

//Submit Comments
var cmd_sub_btn = document.getElementById('cmd_btn');

cmd_sub_btn.onclick = function(){
//Common in ajax call reqs

var request = new XMLHttpRequest();
request.onreadystatechange = function(){
    if(request.readyState === XMLHttpRequest.DONE){
        //Take some Action 
        if(request.status === 200){  
            var commands = request.responseText;
            commands = JSON.parse(commands);
            var list_cmd ='';
            for(var i=0;i<commands.length;i++){
            list_cmd += '<li>'+commands[i]+'</li>';    
            } 
            var cmd_dis = document.getElementById('cmd_output');
            cmd_dis.innerHTML = list_cmd;
             } 
        } 
    
    };
    var cmd_dabba = document.getElementById('cmd_box');
    value_cmd = cmd_dabba.value;
    request.open('GET', 'http://vimalraj571.imad.hasura-app.io/commands?commands='+value_cmd, true);
    request.send(null);      
};




//Common in ajax call reqs
//some.func = function () {
//var request = new XMLHttpRequest();
//request.onreadystatechange = function(){
//    if(request.readyState === XMLHttpRequest.DONE){
//        //Take some Action 
//        if(request.status === 200){ OURS FUNC :) }   }  }  }
//request.open('GET', 'http://vimalraj571.imad.hasura-app.io/counter', true);
//request.send(null);