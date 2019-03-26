const http = require('http');
const fs = require('fs');
const express = require('express');
const path = require('path');
const app = express();

app.get('/',function(req,res) {
    res.send('hi!!!');
    //res.sendFile(path.join(__dirname+'/dist/index.html'));
});

app.use(express.static(__dirname + '/dist'));

app.listen(process.env.port || 3000);
console.log('Running at Port 3000');