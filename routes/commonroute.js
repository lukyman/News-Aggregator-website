var express = require('express');
var router = express.Router();
var feedmodel = require('../model/feeds');
var commonpage = require('../views/common/template.marko');


var pages = {
  "local": require('../views/local/template.marko'),
  "international": require('../views/world/template.marko'),
  "lifestyle": require('../views/lifestyle/template.marko'),
  "technology": require('../views/technology/template.marko'),
  "science": require('../views/science/template.marko'),
  "entertainment": require('../views/entertainment/template.marko'),
  "sports":require('../views/sports/template.marko'),
}

router.get('/:feedkey', function (req, res, next) {
  
  var feedkey = req.params.feedkey;
   
  feedkey = feedkey == "world" ? "international" : feedkey;
console.log("feedkey: "+feedkey)
  var _page = pages[feedkey];
  
  console.log(feedkey)
  feedmodel.getFeed(feedkey, function (err, success) {
    if (err) {
      
    } else {
        console.log("feedkey: "+feedkey,success.length)
      res.marko(_page,{feed:success})
      //res.json(success)  
    }
  }) 
})


module.exports = router;

