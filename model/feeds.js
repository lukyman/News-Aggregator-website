var endpoints = require("./endpoints");
var httpservice = require("../services/httpservice");


exports.getFeed = function (feedkey, clb) {
    
    httpservice.getData(feedkey, function (err, success) {
        if (err) {
        clb(err,null)        
        } else if (success) {
        console.log("feedmodel",feedkey)
            
            clb(null,JSON.parse(success))
        }
        })
}

exports.getFeedByTitle = function (feedkey,title, clb) {
    var fullquery = feedkey + "?title=" + title;
    httpservice.getData(fullquery, function (err, success) {
        if (err) {
        clb(err,null)        
        } else if (success) {
        console.log("feedmodel",feedkey)
            
            clb(null,JSON.parse(success))
        }
        })
}

exports.getTopStories = function (clb) {
    var curr = 0, curr_ = 0;
    var topstories = {};
    for (var i = 0; i < endpoints.topstories.length; i++) {
        
        var feedkey = endpoints.topstories[i];
        var final_endpoint = endpoints.topstories[i] + "/8";
       
        (function (final_endpoint,feedkey,endpoints) { 
         
            httpservice.getData(final_endpoint, function (error, success) {

                curr++;
        
                if (error) {
               // clb(error, null)
        
                } else if (success) {
                topstories[feedkey]=JSON.parse(success);
    
                } else { }

                if (endpoints.topstories.length == curr) {
                
                clb(null,topstories)

                }
            })

        })(final_endpoint, feedkey,endpoints)    
    }

}


exports.getFeedBySize = function (feedkey, size, clb) {
    var final_endpoint = feedkey + "/" + size;
    
      
         httpservice.getData(final_endpoint, function (error, success) {

             curr++;
     
             if (error) {
            // clb(error, null)
     
             } else if (success) {
             
             clb(null,JSON.parse(success))
             
             } 


             })

    }

