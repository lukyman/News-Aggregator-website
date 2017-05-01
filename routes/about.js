var express = require('express');
var router = express.Router();
var about = require('../views/about/template.marko');

router.get('/', function (req, res, next) {
    res.marko(about)
})

module.exports = router;