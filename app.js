const { error } = require('console');
const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.static('static'));


app.get("/",(req,res)=>{
    fs.readFile("./templates/index.html",(error,file)=>{
        res.send(file.toString());
    });
});

app.listen(52273,(error)=>{
    console.log("Ok");
});