var express = require('express');
var router = express.Router();
var privacy = require('../views/privacy/template.marko');

router.get('/', function (req, res, next) {
    res.marko(privacy)
})

module.exports = router; 