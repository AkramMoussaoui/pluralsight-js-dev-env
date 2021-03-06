import express from "express"
import path from "path"
import open from "open"
import compression from "compression"

/*eslint-disable no-console*/

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static("dist"));

app.get('/', function(req, res){
  res.sendfile(path.join(__dirname, '../dist/index.html'))
});

app.listen(port, function(err){
  if(err){
    console.log(err)
  }
  else{
    open('http://localhost:' + port)
  }
});

app.get('/users', function(req, res){
  res.json([
    {"id": 1,"firstName": "bob","lastName":"Smith","email":"bob@gmail.com"},
    {"id": 2,"firstName": "ziadi","lastName":"bilel","email":"ziadi@gmail.com"},
    {"id": 3,"firstName": "hamla","lastName":"hamla","email":"hamla@gmail.com"}
  ]);
});
