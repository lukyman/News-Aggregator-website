var request = require("request");
var baseurl = "http://iasa.io/feeds/";
//var baseurl = "http://localhost:4000/feeds/";

   exports.getData = function (endpoint, clb) {
       var fullquery = baseurl + endpoint;
       console.log("query", fullquery)
    
        request.get(baseurl + endpoint, function (error, success) {
            if (error) {
                clb(error, null)
            } else if (success) {
                clb(null,success.body)
            
            }
        })
    }
