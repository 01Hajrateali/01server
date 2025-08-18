//MODULES IMPORT
const express = require('express');
const cors = require('cors');
const app = express();


//DATA LIMIT && DATA DEPENDENCY
app.use(cors());
app.use(express.json({limit: "2gb"}));
app.use(express.urlencoded({extended: true}));

//ROOT FOLDERS
app.use(express.static('public'));


//LOCAL MODULES INPORT
const getRoutes = require('./routes/getRoutes');
const postRoutes = require('./routes/postRoutes');


//API GENERATE && CREATE 
app.use('/ali', getRoutes);
app.use('/post', postRoutes);


// SERVER SERVE && LISTEN
app.listen(3000, () => {console.log('Server Started http://localhost:3000/')});