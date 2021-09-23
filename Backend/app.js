const express = require('express');

const InitiateMongoServer = require("./db");
InitiateMongoServer();

const AdminData = require('./src/model/Admindata');
const WaitingData = require('./src/model/Waitingdata');
const Craftsdata = require('./src/model/Craftsdata');


const cors = require('cors');
var bodyparser=require('body-parser');
const app = express();


// share data to angular server
app.use(cors());
app.use(bodyparser.json());


app.get('/user', function(req,res){
    res.header("Access-Control-Allow-orgin","*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT,DELETE, OPTIONS')
    AdminData.find()
    .then(function(admin){
        
        res.send(admin);
    });

    
    
});
app.get('/validate', function(req,res){
    res.header("Access-Control-Allow-orgin","*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT,DELETE, OPTIONS')
    WaitingData.find()
    .then(function(waitings){
        
        res.send(waitings);
    });
});    

 app.get('/crafts', function(req,res){
        res.header("Access-Control-Allow-orgin","*")
        res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT,DELETE, OPTIONS')
        Craftsdata.find()
        .then(function(crafts){
            
            res.send(crafts);
        });
    
});
app.get('/craft/:id', function(req,res){
    res.header("Access-Control-Allow-orgin","*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT,DELETE, OPTIONS')
    const id = req.params.id;
    Craftsdata.findOne({ _id: id })
    .then(function(craft){
        
        res.send(craft);
    });

});
app.delete("/deletecraft/:id", (req, res) => {
    res.header("Access-Control-Allow-orgin","*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT,DELETE, OPTIONS')
    const id = req.params.id;
    Craftsdata.findByIdAndDelete({ _id: id }).then(() => {
      console.log("success");
      res.send();
    });
 });

const port = process.env.PORT | 5555;
app.listen(port, function () {
    console.log("Listening at " + port);
});
