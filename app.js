const express = require('express');
const meme = require('./meme');
const app = express();

app.get('/', function(req, res){
    res.send({'message':'hello world'});
});

app.listen(5000, function (){
    console.log('listening at 5000');
});

app.use('/deeznuts', meme.deeznuts);
app.use('/21', meme.wutsnineplusten);

module.exports = app;