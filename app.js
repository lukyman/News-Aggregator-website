var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
//var cookieParser = require('cookie-parser');
//var bodyParser = require('body-parser');
//var xml = require("xml");
var sm = require('sitemap');
var robots = require('robots.txt');

require('marko/node-require');
var markoExpress = require('marko/express');



var index = require('./routes/index');
var users = require('./routes/users');
var common = require('./routes/commonroute');
var contact = require('./routes/contact-us');
var privacy = require('./routes/privacy');
var terms = require('./routes/terms-of-use');
var about = require('./routes/about');
var local = require('./routes/local');
var world = require('./routes/world');
var technology = require('./routes/technology');
var business = require('./routes/business');
var science = require('./routes/science');
var lifestyle = require('./routes/lifestyle');
var entertainment = require('./routes/entertainment');
var sports = require('./routes/sports');
var framed_article = require('./routes/framed_article');

var app = express();
//sitemap.generate4(app,"local","world","sports","business","technology","lifestyle","entertainment","about-us","contact-us","terms-of-use","privacy-policy");
app.use(markoExpress()); //enable res.marko(template, data)

var sitemap = sm.createSitemap({
  hostname: "http://localhost:5000",
  cacheTime: 600000,
  urls: [
    { url: "/local", changefreq: 'daily' },
    { url: "/world", changefreq: "daily" },
    { url: "/sports", changefreq: "daily" },
    { url: "/business", changefreq: 'daily' },
    { url: "/technology", changefreq: 'daily' },
    { url: "/lifestyle", changefreq: 'daily' },
    { url: "/entertainment", changefreq: 'daily' },
    {url: "/about-us", changefreq: 'daily' },
    { url: "/contact-us", changefreq: 'daily' },
    { url: "/terms-of-use", changefreq: 'daily' },
    { url: "/privacy-policy", changefreq: 'daily' }
  ]
})



// view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'marko');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));
app.use('/public', express.static(path.join(__dirname + '/public')));
app.use(robots(__dirname + '/robots.txt'));

app.use('/sitemap.xml', function (req, res) {
  sitemap.toXML(function (err, xml) {
  if (err) {
        return res.status(500).end();
      }
    res.header('Content-Type', 'application/xml');
    res.send(xml);  
  })
  
})

app.use('/local', local);
app.use('/world', world);
app.use('/technology', technology);
app.use('/business', business);
app.use('/lifestyle', lifestyle);
app.use('/sports', sports);
app.use('/entertainment', entertainment);
app.use('/science', science);
app.use('/news', common);
app.use('/users', users);
app.use('/about-us', about);
app.use('/contact-us', contact);
app.use('/privacy-policy', privacy);
app.use('/terms-of-use', terms);
app.use('/article',framed_article)



app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json('error');
});
process.on('uncaughtException', function(err) {
    // handle the error safely
    console.log(err)
})

app.listen(5000);
//app.listen(33759);
module.exports = app;