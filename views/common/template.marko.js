// Compiled using marko@4.4.28 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    template_template = marko_loadTemplate(require.resolve("../layout/template.marko")),
    marko_forEachWithStatusVar = require("marko/src/runtime/helper-forEachWithStatusVar"),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_escapeXmlAttr = marko_helpers.xa,
    hasRenderBodyKey = Symbol.for("hasRenderBody"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag"));

function render(input, out) {
  var data = input;

  include_tag({
      _target: template_template,
      body: {
          renderBody: function renderBody(out) {
            out.w("<div class=\"row\">");

            marko_forEachWithStatusVar(data.feed, function(category, loop) {
              out.w("<div class=\"col l12 col m6 col s12\"><div class=\"card-container\"> <div class=\"news vertical \"><div class=\"media-name\"><p>" +
                marko_escapeXml(category.meta.title) +
                "</p></div><div class=\"news-image\"><img class=\"responsive-img\" onerror=\"this.style.display='none';\" src=\"" +
                marko_escapeXmlAttr(category.media_image) +
                "\" alt=\"news Image\"></div><div class=\"news-description\"><div class=\"news-time\"><i class=\"fa fa-clock-o\"></i> <time class=\"timeago\" datetime=\"" +
                marko_escapeXmlAttr(category.pubDate[0]) +
                "\"> </time></div><div class=\"news-title\" onclick=\"openSource('" +
                marko_escapeXmlAttr(category.linkid) +
                "')\"><h2><a>" +
                marko_escapeXml(category.title[0]) +
                "</a> </h2></div><div class=\"news-content truncate\" id=\"wrapper\">" +
                marko_escapeXml(category.description[0].replace(/(<([^>]+)>)/gi, "")) +
                " </div></div></div></div></div>");
            });

            out.w(" </div>");
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
