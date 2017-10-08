var express = require('express');
const querystring = require('querystring');
var router = express.Router();
var page = require('../views/framed_article/template.marko');
var feedmodel = require('../model/feeds');
var feedkey = "local";



router.get('/', function (req, res, next) {
    var source = req.query.source;
    res.redirect('/article/redirecting?source='+source);
       // res.marko(page, { source: source, return_url: return_url })
  
  
})

router.get('/redirecting', function (req, res, next) {
    var source = req.query.source;

    res.redirect(source);
})

module.exports = router;
 