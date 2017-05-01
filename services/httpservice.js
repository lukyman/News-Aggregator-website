var request = require("request");
var baseurl = "http://iasa.io/feeds/";
//var baseurl = "http://localhost:3000/feeds/";

   exports.getData = function (endpoint, clb) {
        
        request.get(baseurl + endpoint, function (error, success) {
            if (error) {
                clb(error, null)
            } else if (success) {
                clb(null,success.body)
            
            }
        })
    }
