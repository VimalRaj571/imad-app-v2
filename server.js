var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config = {
    user : `vimalraj571`,
    database : `vimalraj571`,
    host : `db.imad.hasura-app.io`, //seriously missed -app in host messes 4 days
    port : `5432`,
    password : process.env.DB_PASSWORD
};


var app = express();
app.use(morgan('combined'));


var articles = {
    'article-one' :{
    title : 'art-1',
    date : 'Feb-1',
    cont :`<p>Some stuff in article-1</p>`
    },
    'article-two' :{
    title : 'art-2',
    date : 'Feb-2',
    cont :`<p>Some stuff in article-2`
    },
    'article-three' :{
    title : 'art-3',
    date : 'Feb-3',
    cont :`<p>Some stuff in article-3`
    },
};

function createTemp(data){
    var title = data.title;
    var date = data.date;
    var cont = data.content;
    var head = data.heading;
    var htmlTemp=
        `<!DOCTYPE html>
        <html>
            <head>
                <title>${title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link href="/ui/style.css" rel="stylesheet" />
                <link href='//fonts.googleapis.com/css?family=Abel' rel='stylesheet'>
            </head>
            <body class="title container">
                <div class="stl">
                <div>
                    <a href="/" >Home</a>
                </div>
                <hr>
                <h3>${head}</h3>
                <div>
                <div>
                    ${date.toDateString()}
                </div>
                <div>
                    ${cont}
                </div>
                </div>
                </div>
            </body>
        </html>`;
return htmlTemp ;
}

var counter = 0;
app.get('/counter', function (req, res) {
  counter = counter + 1 ; 
  res.send(counter.toString());
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


//Connection pools
var pool = new Pool(config);
app.get("/test-db" ,function(req, res){
   //res.send('Hi');
   //the DB check
   //And return thee response
    pool.query('SELECT * FROM test',function (err, result){
       if(err){
           res.status(500).send(err.toString());
       } else{
           res.send(JSON.stringify(result.rows));
       }
    });
});



app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});



//submit-names
var names = [];                                                                 //P.S = Check the Name and Names variable NAMES 
app.get("/submit-names", function(req, res){    // URL like this /submit-names?name(req.query.name this name)=xxxx
    //Get the name from request OBJ
    var name = req.query.name;      //To use the req.query.name insted of req.params.name
    
    names.push(name);   //names is array [] and the name is rq URL values like this /submit-names/somenames
    //JSON = Javascript Object Notation
    res.send(JSON.stringify(names));
});

var commands = [];
app.get("/commands",function(req, res){
    var command = req.query.commands;
    
    commands.push(command);
    res.send(JSON.stringify(commands));
    
});


app.get("/articles/:articleName", function (req, res) {
  
  //var articleName = req.params.articleName;
  
  //SELECT * FROM articles WHERE title = ''; DELETE WHERE a = 'asdf'
  pool.query("SELECT * FROM articles WHERE title = '" + req.params.articleName +"'" , function(err, result){
      if(err){
          res.status(500).send(err.toString());
      }else {
          if(result.rows.length === 0){
              res.status(404).send('Articls Not Found');
          } else{
              var articleData = result.rows[0];
              res.send(createTemp(articleData));   //In here "articles" obj names data=articleName=art1 or art2 or art3    
          }
      }
      
   });
});

//Next connect DB

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
