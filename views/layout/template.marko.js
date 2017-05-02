// Compiled using marko@4.2.8 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/html").t(__filename),
    marko_loadTemplate = require("marko/runtime/helper-loadTemplate"),
    template_template = marko_loadTemplate(require.resolve("../header/template.marko")),
    template_template2 = marko_loadTemplate(require.resolve("../footer/template.marko")),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/taglibs/core/include-tag")),
    init_components_tag = marko_loadTag(require("marko/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/taglibs/async/await-reorderer-tag"));

function render(input, out) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"en\"><head><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no\"><title>Latest Kenya News Headlines &amp; World News, Sports, Business, Technology, Lifestyle, Entertainment </title><meta name=\"google-site-verification\" content=\"FLqSB2HgUocaxLqZObEgrTCHk18mW1K5OQ7CgWoqz8M\"><meta name=\"keywords\" content=\"news kenya, latest news in kenya, breaking news, latest kenyan football news, international news, kenya tech news \"><meta property=\"og:description\" content=\"Latest Kenya news  and International news Headlines in one place. Stream live news on Nipashe Media LIVE-TV\"><meta property=\"twitter:title\" content=\"Latest headlines from Kenya and International News Media => Politics, Business, Sports, World, Technology, Entertainment, Lifestyle\"><meta name=\"twitter:description\" content=\"Latest Kenya news and International news Headlines in one place. Stream live news on Nipashe Media LIVE-TV\"><meta name=\"description\" content=\"Latest Kenya news  and International news Headlines in one place. Stream live news on Nipashe Media LIVE-TV\"><meta property=\"og:url\" content=\"http://www.nipashemedia.com/\"><meta property=\"vk:url\" content=\"http://www.nipashemedia.com/\"><meta property=\"fb:pages\" content=\"1486705764971089\"><script src=\"../public/javascripts/jquery-min.js\"></script><script src=\"../public/javascripts/jquery.dotdotdot.min.js\"></script><link href=\"../public/stylesheets/materialize.css\" type=\"text/css\" rel=\"stylesheet\"><link href=\"../public/stylesheets/style.css\" type=\"text/css\" rel=\"stylesheet\"><link href=\"../public/stylesheets/simpleStyle.css\" type=\"text/css\" rel=\"stylesheet\"><link href=\"../public/stylesheets/font-awesome.min.css\" type=\"text/css\" rel=\"stylesheet\"><link href=\"../public/stylesheets/pgwslider.css\" type=\"text/css\" rel=\"stylesheet\"><link rel=\"../public/stylesheet\" id=\"camera-css\" href=\"stylesheets/camera.css\" type=\"text/css\" media=\"all\"><link href=\"http://fonts.googleapis.com/css?family=Lobster\" rel=\"stylesheet\" type=\"text/css\"><!--[if lt IE 9]>\r\n    <script src=\"js/html5shiv.js\"></script>\r\n    <script src=\"js/respond.min.js\"></script>\r\n    <![endif]--><script>\r\n    \r\n        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\r\n        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\r\n        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\r\n        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\r\n\r\n        ga('create', 'UA-66271206-2', 'auto');\r\n        ga('send', 'pageview');\r\n\r\n    </script><script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\">\r\n</script></head><body><script type=\"javascript\">\r\n    $(document).ready(function() {\r\n\t$(\"#wrapper\").dotdotdot({\r\n\t\t/*\tThe text to add as ellipsis. */\r\n\t\tellipsis\t: '... ',\r\n \r\n\t\t/*\tHow to cut off the text/html: 'word'/'letter'/'children' */\r\n\t\twrap\t\t: 'word',\r\n \r\n\t\t/*\tWrap-option fallback to 'letter' for long words */\r\n\t\tfallbackToLetter: true,\r\n \r\n\t\t/*\tjQuery-selector for the element to keep and put after the ellipsis. */\r\n\t\tafter\t\t: null,\r\n \r\n\t\t/*\tWhether to update the ellipsis: true/'window' */\r\n\t\twatch\t\t: false,\r\n\t\r\n\t\t/*\tOptionally set a max-height, can be a number or function.\r\n\t\t\tIf null, the height will be measured. */\r\n\t\theight\t\t: 3,\r\n \r\n\t\t/*\tDeviation for the height-option. */\r\n\t\ttolerance\t: 0,\r\n \r\n\t\t/*\tCallback function that is fired after the ellipsis is added,\r\n\t\t\treceives two parameters: isTruncated(boolean), orgContent(string). */\r\n\t\tcallback\t: function( isTruncated, orgContent ) {},\r\n \r\n\t\tlastCharacter\t: {\r\n \r\n\t\t\t/*\tRemove these characters from the end of the truncated text. */\r\n\t\t\tremove\t\t: [ ' ', ',', ';', '.', '!', '?' ],\r\n \r\n\t\t\t/*\tDon't add an ellipsis if this array contains \r\n\t\t\t\tthe last character of the truncated text. */\r\n\t\t\tnoEllipsis\t: []\r\n\t});\r\n    });\r\n\r\n</script>");

  include_tag({
      _target: template_template
    }, out);

  out.w("<div class=\"wrapper\"><div class=\"container\">");

  include_tag({
      _target: input.body
    }, out);

  out.w("</div></div>");

  include_tag({
      _target: template_template2
    }, out);

  out.w("<script src=\"../public/javascripts/materialize.js\"></script><script src=\"../public/javascripts/jquery.timeago.js\"></script><script src=\"../public/javascripts/pgwslider.js\"></script><script src=\"../public/javascripts/jquery.touchSwipe.min.js\"></script><script src=\"../public/javascripts/jquery.liquid-slider.js\"></script><script type=\"text/javascript\" src=\"../public/javascripts/camera.js\"></script><script src=\"../public/javascripts/init.js\"></script><script>\r\n   jQuery(document).ready(function() {\r\n  jQuery(\"time.timeago\").timeago();\r\n});\r\n\r\nfunction imgError(image) {\r\n    console.log(image)\r\n    image.onerror = \"\";\r\n    image.srcElement.hidden = true;\r\n    return true;\r\n}\r\n\r\nfunction openSource(url){\r\n    console.log(url)\r\n    window.open(url)\r\n}\r\n</script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "../header/template.marko",
      "../footer/template.marko",
      "marko/taglibs/core/include-tag",
      "marko/components/taglib/init-components-tag",
      "marko/taglibs/async/await-reorderer-tag"
    ]
  };
