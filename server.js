const express = require('express')

const app = express()

app.use(express.static(__dirname+"/dist"))

app.get(/.*/,function(req,res){
    res.sendfile(__dirname+"/dist/index.html");
});

const port = process.env.PORT || 8081

app.listen(port)
console.log('listening on port : ' + port)