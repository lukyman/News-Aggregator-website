var express = require('express');
var router = express.Router();
var feedmodel = require('../model/feeds');
var commonpage = require('../views/common/template.marko');


router.get('/:feedkey', function (req, res, next) {
  var feedkey = req.params.feedkey;
  console.log(feedkey)
  feedmodel.getFeed(feedkey, function (err, success) {
    if (err) {
      
    } else {
        console.log(success.length)
      res.marko(commonpage,{feed:success})
      //res.json(success)  
    }
  }) 
})

module.exports = router;
