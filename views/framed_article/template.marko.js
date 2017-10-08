// Compiled using marko@4.4.28 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_escapeXmlAttr = marko_helpers.xa,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"en\"><head><script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script><script>\r\n  (adsbygoogle = window.adsbygoogle || []).push({\r\n    google_ad_client: \"ca-pub-7632017153147066\",\r\n    enable_page_level_ads: true\r\n  });\r\n</script><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no\"><meta name=\"google-site-verification\" content=\"FLqSB2HgUocaxLqZObEgrTCHk18mW1K5OQ7CgWoqz8M\"><meta name=\"msvalidate.01\" content=\"9BE23A66E8E93A657BC60EE7426E55FB\"><meta property=\"og:url\" content=\"http://www.nipashemedia.com/\"><meta property=\"vk:url\" content=\"http://www.nipashemedia.com/\"><meta property=\"fb:pages\" content=\"1486705764971089\"><script src=\"../public/javascripts/jquery-min.js\"></script><script src=\"../public/javascripts/jquery.dotdotdot.min.js\"></script><link href=\"../public/stylesheets/materialize.css\" type=\"text/css\" rel=\"stylesheet\"><link href=\"../public/stylesheets/style.css\" type=\"text/css\" rel=\"stylesheet\"><link href=\"../public/stylesheets/simpleStyle.css\" type=\"text/css\" rel=\"stylesheet\"><link href=\"../public/stylesheets/font-awesome.min.css\" type=\"text/css\" rel=\"stylesheet\"><link href=\"http://fonts.googleapis.com/css?family=Lobster\" rel=\"stylesheet\" type=\"text/css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<header><div class=\"header  \"> <div class=\"top-header\"><div class=\"container\"><div class=\"row\"><div class=\"col l4 col m5 col s2\"><a href=\"#\" data-activates=\"slide-out\" class=\"button-collapse\"><i class=\"mdi-navigation-menu\"></i></a></div><div class=\"col l4 col m5 col s5\"><a href=\"/\" class=\"mobile-logo-title\"> Nipashe Media </a></div></div></div></div></div></header><div style=\"height: 477px; top: 192px;\"><iframe src=\"" +
    marko_escapeXmlAttr(data.source) +
    "\"></iframe></div><script src=\"../public/javascripts/materialize.js\"></script><script src=\"../public/javascripts/jquery.timeago.js\"></script><script src=\"../public/javascripts/pgwslider.js\"></script><script src=\"../public/javascripts/jquery.touchSwipe.min.js\"></script><script src=\"../public/javascripts/jquery.liquid-slider.js\"></script><script type=\"text/javascript\" src=\"../public/javascripts/camera.js\"></script><script src=\"../public/javascripts/init.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
