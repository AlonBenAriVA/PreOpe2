var session = require('express-session');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
app.use(express.static(__dirname));
 app.use(session({secret: 'secretKeys', resave: false, saveUninitialized: false}));
 app.use(bodyParser.json());

app.get('/', function (req, res) {
    response.send('Simple web server of files from ' + __dirname);
});

app.post('/WritePatientInfo',function(req,res){
  console.log('From server.js')
  console.log(req.body)
})

var server = app.listen(3500,function(){
  var port = server.address().port
  console.log('Listeining at localhost port: '+port+' on directory'+__dirname)
})
