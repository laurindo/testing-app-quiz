const http = require('http');
const fs = require('fs');
const express = require('express');
const path = require('path');
const app = express();

app.get('/',function(req,res) {
    res.sendFile(path.join(__dirname+'/dist/index.html'));
});

app.use(express.static(__dirname + '/dist'));

const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log(`Running at Port ${PORT}`);
