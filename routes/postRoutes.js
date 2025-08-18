const express = require('express');
const path = require('path');
const fs = require('fs');

const routes = express.Router();

routes.post('/H01', (req, res) => {
  const f = path.join('../db/image.json');
  fs.readFile(f, 'utf8', (err, od) => {
    
    if(err) return res.status(500).send("reading failed");
    
    let data = [];
    data = JSON.parse(od);
    data.push(req.body);
    
    fs.writeFileSync(f, JSON.stringify(data, null, 2));
    res.send("Success full ")
  });
});


module.exports = routes;