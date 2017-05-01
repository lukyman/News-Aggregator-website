var express = require('express');
var router = express.Router();
var contact = require('../views/contact/template.marko');

router.get('/', function (req, res, next) {
    res.marko(contact)
})

module.exports = router;