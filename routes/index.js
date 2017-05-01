var express = require('express');
var router = express.Router();
var home = require('../views/home/template.marko');
var feedmodel = require('../model/feeds');
var commonpage = require('../views/common/template.marko');
/* GET home page. */
router.get('/', function (req, res, next) {

  feedmodel.getTopStories(function (err, success) {
    if (success) {
      //var data = [success]
      console.log(Object.keys(success.local))
      res.marko(home, {
        local: success.local,
        world: success.international,
        business: success.business,
        sports: success.sports,
        technology: success.technology,
        lifestyle: success.lifestyle,
        entertainment:success.entertainment
        
      });
    // res.json(success)
    }
  })
  
 
});


router.get('/:feedkey', function (req, res, next) {
  var feedkey = req.params.feedkey;
  if (feedkey == "world") {
    feedkey = "international"
  }
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
