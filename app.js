const express = require('express');
const currency = require('./currency');
const app = express();

app.get('/', function(req, res){
    res.send({'message':'hello world'});
});

app.listen(5000, function (){
    console.log('listening at 5000');
});

//<url>/currency?yen=<numeric value>
//<url>/currency?us=<numeric value>
app.use('/currency', currency.convert);

module.exports = app;