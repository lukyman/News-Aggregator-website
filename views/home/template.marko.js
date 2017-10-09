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
            out.w("<div class=\"col l5 col m12 col s12\"> <div class=\"fb-like\"></div> </div><div class=\"row\"><div class=\"col l12 m12 s12\">");

            if (data.local) {
              out.w("<div class=\"col l8 m10 s12 \"><div class=\"sidbar-box z-depth-1\"><div class=\"sidebar-title\">Local</div><div class=\"news-sidebar\"><div class=\"row\">");

              marko_forEachWithStatusVar(data.local, function(category, loop) {
                out.w("<div class=\"col l6 col m6 col s12\"><div class=\"news-box\"><div class=\"news-detail\"><div class=\"news-category\"><div><p class=\"word-wrap\">" +
                  marko_escapeXml(category.meta.title) +
                  "</p></div><div class=\"news-time\"><i class=\"fa fa-clock-o\"></i> <time class=\"timeago\" datetime=\"" +
                  marko_escapeXmlAttr(category.pubDate[0]) +
                  "\"> </time></div></div><div class=\"news-title\"><a href=\"/local?title=" +
                  marko_escapeXmlAttr(category.title[0]) +
                  "\"><h1> " +
                  marko_escapeXml(category.title[0]) +
                  " </h1></a> </div></div></div></div>");
              });

              out.w("</div></div></div></div>");
            }

            if (data.business) {
              out.w("<div class=\"col l4 col m12 col s12\"><div class=\"sidbar-box z-depth-1\"><div class=\"sidebar-title\">Business</div><div class=\"news-sidebar\">");

              marko_forEachWithStatusVar(data.business, function(category, loop) {
                if (loop.getIndex() < 4) {
                  out.w("<div class=\"news-box\"><div class=\"news-detail\"><div class=\"news-category\"><div><p class=\"word-wrap\">" +
                    marko_escapeXml(category.meta.title) +
                    "</p></div><div class=\"news-time\"><i class=\"fa fa-clock-o\"></i> <time class=\"timeago\" datetime=\"" +
                    marko_escapeXmlAttr(category.pubDate[0]) +
                    "\"> </time></div></div><div class=\"news-title\"><a href=\"/business?title=" +
                    marko_escapeXmlAttr(category.title[0]) +
                    "\">" +
                    marko_escapeXml(category.title[0]) +
                    "</a></div></div></div>");
                }
              });

              out.w("</div></div></div>");
            }

            out.w("</div></div><br><div class=\"row\"><div class=\"col l12 m12 s12\">");

            if (data.world) {
              out.w("<div class=\"col l8 m8 s12 z-depth-1\"><div class=\"sidebar-title\">World</div><div class=\"news-sidebar\">");

              marko_forEachWithStatusVar(data.world, function(category, loop) {
                out.w("<div class=\"col l6 col m6 col s12\"><div class=\"news-box\"><div class=\"news-detail\"><div class=\"news-category\"><div><p class=\"word-wrap\">" +
                  marko_escapeXml(category.meta.title) +
                  "</p></div><div class=\"news-time\"><i class=\"fa fa-clock-o\"></i> <time class=\"timeago\" datetime=\"" +
                  marko_escapeXmlAttr(category.pubDate[0]) +
                  "\"> </time></div></div><div class=\"news-title\"><a href=\"/world?title=" +
                  marko_escapeXmlAttr(category.title[0]) +
                  "\">" +
                  marko_escapeXml(category.title[0]) +
                  "</a></div></div></div></div>");
              });

              out.w("</div> </div>");
            }

            if (data.technology) {
              out.w("<div class=\"col l4 col m12 col s12\"><div class=\"sidbar-box z-depth-1\"><div class=\"sidebar-title\">Technology</div><div class=\"news-sidebar\">");

              marko_forEachWithStatusVar(data.technology, function(category, loop) {
                if (loop.getIndex() < 4) {
                  out.w("<div class=\"news-box\"><div class=\"news-detail\"><div class=\"news-category\"><div><p class=\"word-wrap\">" +
                    marko_escapeXml(category.meta.title) +
                    "</p></div><div class=\"news-time\"><i class=\"fa fa-clock-o\"></i> <time class=\"timeago\" datetime=\"" +
                    marko_escapeXmlAttr(category.pubDate[0]) +
                    "\"> </time></div></div><div class=\"news-title\"><a href=\"/business?title=" +
                    marko_escapeXmlAttr(category.title[0]) +
                    "\">" +
                    marko_escapeXml(category.title[0]) +
                    "</a></div></div></div>");
                }
              });

              out.w("</div></div></div>");
            }

            out.w("</div></div> <br><div class=\"row\"><div class=\"col l12 m12 s12\">");

            if (data.sports) {
              out.w("<div class=\"col l12 m12 s12 z-depth-1\"><div class=\"sidebar-title\">Sports</div><div class=\"news-sidebar\">");

              marko_forEachWithStatusVar(data.sports, function(category, loop) {
                out.w("<div class=\"col l6 col m6 col s12\"><div class=\"news-box\"><div class=\"news-detail\"><div class=\"news-category\"><div><p class=\"word-wrap\">" +
                  marko_escapeXml(category.meta.title) +
                  "</p></div><div class=\"news-time\"><i class=\"fa fa-clock-o\"></i> <time class=\"timeago\" datetime=\"" +
                  marko_escapeXmlAttr(category.pubDate[0]) +
                  "\"> </time></div></div><div class=\"news-title\"><a href=\"/world?title=" +
                  marko_escapeXmlAttr(category.title[0]) +
                  "\">" +
                  marko_escapeXml(category.title[0]) +
                  "</a></div></div></div></div>");
              });

              out.w("</div> </div>");
            }

            out.w("</div></div> <script>\r\n\r\n    function formatfeedurl(title){\r\n        \r\n    \r\n    console.log(title.replace(\" \", \"-\"))\r\n    }\r\n   </script>");
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
