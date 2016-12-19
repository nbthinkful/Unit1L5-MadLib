'use strict';

// Request and response object drills
// ==================================

const express = require('express');
const app = express();

// your code here. 
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render(__dirname + '/views/index.ejs', {
    title: 'Thinkful Madlib Assignment',
    adjective1: req.query.adjective1,
    adjective2: req.query.adjective2,
    adjective3: req.query.adjective3,
    adverb: req.query.adverb,
    name: req.query.name,
    noun: req.query.noun,
    cord: req.query.cord,
    place: req.query.place  
  });
});

// listen for requests :)
app.listen(process.env.PORT || 8000, () => console.log(
  `Your app is listening on port ${process.env.PORT || 8000}`));
