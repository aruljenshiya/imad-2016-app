var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
'article-one' : {
    title: 'Article one 1 Arul Jenshiya',
    heading:'Article one',
    date:'nov 3,2016',
    content:`<p>
                Hai i am Jen studying B.E(ECE) in LOYOLA
            </p>
           <p>
               Hai i am Jenil studying B.E(MECH) in ROHINI
            </p>
            <p>
                Hai i am Mejil studying B.E(MECH) in ROHINI
            </p>`
    
    },
    'article-two' : { title: 'Article two 1 Arul Jenshiya',
    heading:'Article two',
    date:'nov 3,2016',
    content:`<p>
               Hai i am Jenil .I have an Apple iphone
            </p>`
        
    },
    'article-three' :{ title: 'Article three 1 Arul Jenshiya',
    heading:'Article three',
    date:'nov 3,2016',
    content:`<p>
               Hai i am Mejil .I have an Apple iphone
            </p>`
        
    }
};
function createTemplate (data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;

var htmlTemplate =`<html>
  <head>
      <title>
          ${title}
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
       <link href="/ui/style.css" rel="stylesheet" />
     
  </head>  
    <body>
        <div class="container">
            
        
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div>
    </div>
    
    </body>
    </html>
    `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    //articleName==article-one
    //articles[articleName] == {} content object for article one
    var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
