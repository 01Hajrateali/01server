const express = require('express');
const path = require('path');
const fs = require('fs');
const routes = express.Router();

routes.get('/home', (req, res) => {
  const p = "../html/index.html";
  const f = path.join(__dirname, p);
  res.sendFile(f);
});


module.exports = routes;