const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('hello world');
});

app.listen(5000, function (){
    console.log('listening at 5000');
});

module.exports = app;