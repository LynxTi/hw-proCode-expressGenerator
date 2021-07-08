const express = require('express');
const getPlanetsCntl = require('../controlers/getPlanets');

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res,) {

  getPlanetsCntl.getPlanets(4).then( (value) => {
    res.send(value); 
  });
});

module.exports = router;
