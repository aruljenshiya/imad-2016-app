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
var counter=0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
    
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
var names=[];
app.get("/submit-name/:name",function(req,res) {
    //Get the name from the request object
    var name = req.params.name;
    names.push(name);
    //JSON: Javascript Object Notation
    res.send(JSON.stringify(names));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
//Submit name
var nameInput = document.getElementById("name");
var name= nameInput.value;
var submit=document.getElementById("submit-btn");
submit.onclick = function () {
    //Make a request to the server ans send the name
    
    //Capture a list of name and render it as a list 
    var names=["name1","name2","name3","name4"];
    var list="";
    for(var i=0; i<name.length; i++) {
        list += "<li>" + names[i] +"<li>";
        
    }
    var ul=document.getElementById("namelist");
    ul.innerHTML=list;
};