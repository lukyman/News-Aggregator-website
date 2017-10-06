var express = require('express');
const querystring = require('querystring');
var router = express.Router();
var home = require('../views/home/template.marko');
var feedmodel = require('../model/feeds');
var page = require('../views/world/template.marko');
var feedkey = "international";


router.get('/', function (req, res, next) {
  var title = querystring.escape(req.query.title);
  
  if (title!="undefined") {
    console.log(title,"----hohohhoh-----")
    
    feedmodel.getFeedByTitle(feedkey, title, function (err, success) {
      if (err) {
        
      } else {
        if (success[0]!=null) {
          var title = success[0].meta.title + " | " + success[0].titleid;
          var image = success[0].media_image;
          res.marko(page,{feed:success,title:title,image:image})
          
        } else {
          res.marko(page,{feed:success})
         
        }  
        
         
      }
    })
  } else {
    feedmodel.getFeed(feedkey, function (err, success) {
      if (err) {
      
      } else {
        res.marko(page, { feed: success })
       
      }
    })
  }  
})


module.exports = router;
