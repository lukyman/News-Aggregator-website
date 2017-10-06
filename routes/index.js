var express = require('express');
const querystring = require('querystring');
var router = express.Router();
var home = require('../views/home/template.marko');
var feedmodel = require('../model/feeds');
var commonpage = require('../views/common/template.marko');
/* GET home page. */


var local = require('../views/local/template.marko');
var international = require('../views/world/template.marko');
var lifestyle = require('../views/lifestyle/template.marko');
var technology = require('../views/technology/template.marko');
var science = require('../views/science/template.marko');
var entertainment = require('../views/entertainment/template.marko');
var sports = require('../views/sports/template.marko');
var business = require('../views/business/template.marko');






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






/*router.get('/:feedkey', function (req, res, next) {
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
})*/


/*
router.get('/:feedkey', function (req, res, next) {
  var title = querystring.escape(req.query.title);
  
  var feedkey = req.params.feedkey;
  feedkey = feedkey == "world" ? "international" : feedkey;
  
  var _page = feedkey;
  
  console.log(feedkey)
  if (title!="undefined") {
    console.log(title,"----hohohhoh-----")
    
    feedmodel.getFeedByTitle(feedkey, title, function (err, success) {
      if (err) {
        
      } else {
          console.log(success)
        res.marko(_page,{feed:success})
        //res.json(success)  
      }
    })
  } else {
    feedmodel.getFeed(feedkey, function (err, success) {
      if (err) {
      
      } else {
        console.log("paaaagggeee",_page)
        res.marko(_page, { feed: success })
        //res.json(success)  
      }
    })
  }  
})*/


module.exports = router;
