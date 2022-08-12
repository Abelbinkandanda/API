const express = require('express') // importation de la librairie express
const app = express();//init express
app.listen(3500, function(){
    console.log('okay');
});
app.get('/abk', function (req,res){
    res.send('okay je vais bien');
})
app.get('/kand', function(req, res){
    res.send('hello are u okay?');
})