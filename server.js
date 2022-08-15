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
app.get('/delete/:id', function(req, res){
    res.send(`${req.params.id} Deleted`);
})
app.get('/sayhello/:name', function(req, res){
    res.send('Hello ' +req.params.name);
})
app.get('/name/:name1/:name2', function(req, res){
    res.send(req.params.name1 +' '+req.params.name2);
})