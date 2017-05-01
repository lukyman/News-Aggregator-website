var express = require('express');
var router = express.Router();
var terms = require('../views/terms/template.marko');

router.get('/', function (req, res, next) {
    res.marko(terms)
})

module.exports = router;