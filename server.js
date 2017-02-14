var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one' :{
    title : 'art-1',
    date : 'Feb-1',
    cont :`<p>Some stuff in article-1`
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
    var cont = data.cont;
    var htmlTemp=
        `<!DOCTYPE html>
        <html>
            <head>
                <title>${title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link href="/ui/style.css" rel="stylesheet" />
            </head>
            <body class="title container">
                <div class="stl">
                <div>
                    <a href="/" >Home</a>
                </div>
                <hr>
                <h3>SOmethin</h3>
                <div>
                <div>
                    ${date}
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


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
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

app.get('/:articleName', function (req, res) {
  var articleName = req.params.articleName;
  res.send(createTemp(articles[articleName]));   //In here "articles" obj names data=articleName=art1 or art2 or art3
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
