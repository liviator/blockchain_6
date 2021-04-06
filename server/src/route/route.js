const express = require('express');
const routeur = express.Router();
const obj = require('../utils/web');

routeur.post("/try",obj.try);


module.exports = routeur