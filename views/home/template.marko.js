// Compiled using marko@4.4.28 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    template_template = marko_loadTemplate(require.resolve("../layout/template.marko")),
    hasRenderBodyKey = Symbol.for("hasRenderBody"),
    marko_forEachWithStatusVar = require("marko/src/runtime/helper-forEachWithStatusVar"),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_escapeXmlAttr = marko_helpers.xa,
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag"));

function render(input, out) {
  var data = input;

  include_tag({
      _target: template_template,
      meta: {
          renderBody: function renderBody(out) {
            out.w("<title>Latest Kenya News Headlines &amp; World News, Sports, Business, Technology, Lifestyle, Entertainment </title><meta property=\"og:description\" content=\"Latest Kenya news  and International news Headlines in one place. Stream live news on Nipashe Media LIVE-TV\"><meta property=\"twitter:title\" content=\"Latest headlines from Kenya and International News Media => Politics, Business, Sports, World, Technology, Entertainment, Lifestyle\"><meta name=\"twitter:description\" content=\"Latest Kenya news and International news Headlines in one place. Stream live news on Nipashe Media LIVE-TV\"><meta name=\"description\" content=\"Latest Kenya news  and International news Headlines in one place. Stream live news on Nipashe Media LIVE-TV\">");
          }
        },
      body: {
          renderBody: function renderBody(out) {
            out.w("<div class=\"col l4 col m12 col s12 top-story\"><div class=\"sidbar-box z-depth-1\"><div class=\"sidebar-title\"><h1>Top Stories</h1></div><ul>");

            marko_forEachWithStatusVar(data.local, function(category, loop) {
              out.w("<li><div class=\"col l6 col m6 col s8\"><a onclick=\"openSource('" +
                marko_escapeXmlAttr(category.linkid) +
                "')\"><h1> " +
                marko_escapeXml(category.title[0]) +
                "</h1></a></div></li>");
            });

            out.w("</ul></div></div><div class=\"col l5 col m12 col s12\"> <div class=\"fb-like\"></div> </div><div class=\"row\"><div class=\"title\"><a href=\"/local\">Local</a></div>");

            marko_forEachWithStatusVar(data.local, function(category, loop) {
              out.w("<div class=\"col l6 col m6 col s12\"><div class=\"card-container\"> <div class=\"news vertical \"><div class=\"media-name\"><p onload=\"formatfeedurl('category.meta.title')\">" +
                marko_escapeXml(category.meta.title) +
                "</p></div><div class=\"news-image\"><img class=\"responsive-img\" onerror=\"this.style.display='none';\" src=\"" +
                marko_escapeXmlAttr(category.media_image) +
                "\" alt=\"news Image\"></div><div class=\"news-description\"><div class=\"news-time\"><i class=\"fa fa-clock-o\"></i> <time class=\"timeago\" datetime=\"" +
                marko_escapeXmlAttr(category.pubDate[0]) +
                "\"> </time><div class=\"fb-share-button\" data-href=\"http://nipashemedia.com/local?title=" +
                marko_escapeXmlAttr(category.title) +
                "\" data-layout=\"button_count\"></div></div><div class=\"news-title\" onclick=\"openSource('" +
                marko_escapeXmlAttr(category.linkid) +
                "','" +
                marko_escapeXmlAttr(category.title[0]) +
                "')\" onchange=\"formatfeedurl('" +
                marko_escapeXmlAttr(category.title[0]) +
                "')\"><h2><a>" +
                marko_escapeXml(category.title[0]) +
                "</a> </h2></div><div class=\"news-content truncate\" id=\"wrapper\">" +
                marko_escapeXml(category.description[0].replace(/(<([^>]+)>)/gi, "")) +
                " </div></div></div></div></div> ");
            });

            out.w(" </div>");

            if (data.international) {
              out.w("<div class=\"row\"><div class=\"title\"><a href=\"/world\">World</a></div>");

              marko_forEachWithStatusVar(data.international, function(category, loop) {
                out.w("<div class=\"col l6 col m6 col s8\"><div class=\"card-container\"> <div class=\"news vertical \"><div class=\"media-name\"><p>" +
                  marko_escapeXml(category.meta.title) +
                  "</p></div><div class=\"news-image\"><img class=\"responsive-img\" onerror=\"this.style.display='none';\" src=\"" +
                  marko_escapeXmlAttr(category.media_image) +
                  "\" alt=\"news Image\"></div><div class=\"news-description\"><div class=\"news-time\"><i class=\"fa fa-clock-o\"></i> <time class=\"timeago\" datetime=\"" +
                  marko_escapeXmlAttr(category.pubDate[0]) +
                  "\"> </time><div class=\"fb-share-button\" data-href=\"http://nipashemedia.com/world?title=" +
                  marko_escapeXmlAttr(category.title) +
                  "\" data-layout=\"button_count\"></div></div><div class=\"news-title\" onclick=\"openSource('" +
                  marko_escapeXmlAttr(category.linkid) +
                  "')\"><h2><a>" +
                  marko_escapeXml(category.title[0]) +
                  "</a> </h2></div><div class=\"news-content truncate\" id=\"wrapper\">" +
                  marko_escapeXml(category.description[0].replace(/(<([^>]+)>)/gi, "")) +
                  " </div></div></div></div></div>");
              });

              out.w(" </div>");
            }

            if (data.business) {
              out.w("<div class=\"row\"><div class=\"title\"><a href=\"/business\">Business</a></div>");

              marko_forEachWithStatusVar(data.business, function(category, loop) {
                out.w("<div class=\"col l6 col m6 col s8\"><div class=\"card-container\"> <div class=\"news vertical \"><div class=\"media-name\"><p>" +
                  marko_escapeXml(category.meta.title) +
                  "</p></div><div class=\"news-image\"><img class=\"responsive-img\" onerror=\"this.style.display='none';\" src=\"" +
                  marko_escapeXmlAttr(category.media_image) +
                  "\" alt=\"news Image\"></div><div class=\"news-description\"><div class=\"news-time\"><i class=\"fa fa-clock-o\"></i> <time class=\"timeago\" datetime=\"" +
                  marko_escapeXmlAttr(category.pubDate[0]) +
                  "\"> </time><div class=\"fb-share-button\" data-href=\"http://nipashemedia.com/business?title=" +
                  marko_escapeXmlAttr(category.title) +
                  "\" data-layout=\"button_count\"></div></div><div class=\"news-title\" onclick=\"openSource('" +
                  marko_escapeXmlAttr(category.linkid) +
                  "')\"><h2><a>" +
                  marko_escapeXml(category.title[0]) +
                  "</a> </h2></div><div class=\"news-content truncate\" id=\"wrapper\">" +
                  marko_escapeXml(category.description[0].replace(/(<([^>]+)>)/gi, "")) +
                  " </div></div></div></div></div>");
              });

              out.w(" </div>");
            }

            if (data.technology) {
              out.w("<div class=\"row\"><div class=\"title\"><a href=\"/technology\">Technology</a></div>");

              marko_forEachWithStatusVar(data.technology, function(category, loop) {
                out.w("<div class=\"col l6 col m6 col s8\"><div class=\"card-container\"> <div class=\"news vertical \"><div class=\"media-name\"><p>" +
                  marko_escapeXml(category.meta.title) +
                  "</p></div><div class=\"news-image\"><img class=\"responsive-img\" onerror=\"this.style.display='none';\" src=\"" +
                  marko_escapeXmlAttr(category.media_image) +
                  "\" alt=\"news Image\"></div><div class=\"news-description\"><div class=\"news-time\"><i class=\"fa fa-clock-o\"></i> <time class=\"timeago\" datetime=\"" +
                  marko_escapeXmlAttr(category.pubDate[0]) +
                  "\"> </time><div class=\"fb-share-button\" data-href=\"http://nipashemedia.com/technology?title=" +
                  marko_escapeXmlAttr(category.title) +
                  "\" data-layout=\"button_count\"></div></div><div class=\"news-title\" onclick=\"openSource('" +
                  marko_escapeXmlAttr(category.linkid) +
                  "')\"><h2><a>" +
                  marko_escapeXml(category.title[0]) +
                  "</a> </h2></div><div class=\"news-content truncate\" id=\"wrapper\">" +
                  marko_escapeXml(category.description[0].replace(/(<([^>]+)>)/gi, "")) +
                  " </div></div></div></div></div>");
              });

              out.w(" </div>");
            }

            if (data.sports) {
              out.w("<div class=\"row\"><div class=\"title\"><a href=\"/sports\">Sports</a></div>");

              marko_forEachWithStatusVar(data.sports, function(category, loop) {
                out.w("<div class=\"col l6 col m6 col s8\"><div class=\"card-container\"> <div class=\"news vertical \"><div class=\"media-name\"><p>" +
                  marko_escapeXml(category.meta.title) +
                  "</p></div><div class=\"news-image\"><img class=\"responsive-img\" onerror=\"this.style.display='none';\" src=\"" +
                  marko_escapeXmlAttr(category.media_image) +
                  "\" alt=\"news Image\"></div><div class=\"news-description\"><div class=\"news-time\"><i class=\"fa fa-clock-o\"></i> <time class=\"timeago\" datetime=\"" +
                  marko_escapeXmlAttr(category.pubDate[0]) +
                  "\"> </time><div class=\"fb-share-button\" data-href=\"http://nipashemedia.com/sports?title=" +
                  marko_escapeXmlAttr(category.title) +
                  "\" data-layout=\"button_count\"></div></div><div class=\"news-title\" onclick=\"openSource('" +
                  marko_escapeXmlAttr(category.linkid) +
                  "')\"><h2><a>" +
                  marko_escapeXml(category.title[0]) +
                  "</a> </h2></div><div class=\"news-content truncate\" id=\"wrapper\">" +
                  marko_escapeXml(category.description[0].replace(/(<([^>]+)>)/gi, "")) +
                  " </div></div></div></div></div> ");
              });

              out.w(" </div>");
            }

            if (data.lifestyle) {
              out.w("<div class=\"row\"><div class=\"title\"><a href=\"/lifestyle\">Lifestyle</a></div>");

              marko_forEachWithStatusVar(data.lifestyle, function(category, loop) {
                out.w("<div class=\"col l6 col m6 col s8\"><div class=\"card-container\"> <div class=\"news vertical \"><div class=\"media-name\"><p>" +
                  marko_escapeXml(category.meta.title) +
                  "</p></div><div class=\"news-image\"><img class=\"responsive-img\" onerror=\"this.style.display='none';\" src=\"" +
                  marko_escapeXmlAttr(category.media_image) +
                  "\" alt=\"news Image\"></div><div class=\"news-description\"><div class=\"news-time\"><i class=\"fa fa-clock-o\"></i> <time class=\"timeago\" datetime=\"" +
                  marko_escapeXmlAttr(category.pubDate[0]) +
                  "\"> </time><div class=\"fb-share-button\" data-href=\"http://nipashemedia.com/lifestyle?title=" +
                  marko_escapeXmlAttr(category.title) +
                  "\" data-layout=\"button_count\"></div></div><div class=\"news-title\" onclick=\"openSource('" +
                  marko_escapeXmlAttr(category.linkid) +
                  "')\"><h2><a>" +
                  marko_escapeXml(category.title[0]) +
                  "</a> </h2></div><div class=\"news-content truncate\" id=\"wrapper\">" +
                  marko_escapeXml(category.description[0].replace(/(<([^>]+)>)/gi, "")) +
                  " </div></div></div></div></div>");
              });

              out.w(" </div>");
            }

            if (data.entertainment) {
              out.w("<div class=\"row\"><div class=\"title\"><a href=\"/entertainment\">Entertaiment</a></div>");

              marko_forEachWithStatusVar(data.entertainment, function(category, loop) {
                out.w("<div class=\"col l6 col m6 col s8\"><div class=\"card-container\"> <div class=\"news vertical \"><div class=\"media-name\"><p>" +
                  marko_escapeXml(category.meta.title) +
                  "</p></div><div class=\"news-image\"><img class=\"responsive-img\" onerror=\"this.style.display='none';\" src=\"" +
                  marko_escapeXmlAttr(category.media_image) +
                  "\" alt=\"news Image\"></div><div class=\"news-description\"><div class=\"news-time\"><i class=\"fa fa-clock-o\"></i> <time class=\"timeago\" datetime=\"" +
                  marko_escapeXmlAttr(category.pubDate[0]) +
                  "\"> </time><div class=\"fb-share-button\" data-href=\"http://nipashemedia.com/entertainment?title=" +
                  marko_escapeXmlAttr(category.title) +
                  "\" data-layout=\"button_count\"></div></div><div class=\"news-title\" onclick=\"openSource('" +
                  marko_escapeXmlAttr(category.linkid) +
                  "')\"><h2><a>" +
                  marko_escapeXml(category.title[0]) +
                  "</a> </h2></div><div class=\"news-content truncate\" id=\"wrapper\">" +
                  marko_escapeXml(category.description[0].replace(/(<([^>]+)>)/gi, "")) +
                  " </div></div></div></div></div>");
              });

              out.w(" </div>");
            }

            out.w("<script>\r\n\r\n    function formatfeedurl(title){\r\n        \r\n    \r\n    console.log(title.replace(\" \", \"-\"))\r\n    }\r\n   </script>");
          }
        },
      [hasRenderBodyKey]: true
    }, out);
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "../layout/template.marko",
      "marko/src/taglibs/core/include-tag"
    ]
  };
