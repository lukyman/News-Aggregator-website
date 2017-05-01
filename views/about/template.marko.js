// Compiled using marko@4.2.8 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/html").t(__filename),
    marko_loadTemplate = require("marko/runtime/helper-loadTemplate"),
    template_template = marko_loadTemplate(require.resolve("../layout/template.marko")),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/taglibs/core/include-tag"));

function render(input, out) {
  var data = input;

  include_tag({
      _target: template_template,
      body: {
          renderBody: function renderBody(out) {
            out.w("<div class=\"row\"><div class=\"col l12 col m12 col s12\"><div class=\"about z-depth-1\"><div class=\"col l8 offset-l2 col m12 col s12\"><p><b>NipasheMedia</b> is a solution for news lovers who want to have a simple software that ease their hunt for news headlines and stay updated with current affairs both local and international.</p><p>Thus we gather and aggregate news from several local (Kenya) and internations publisher to give you easy to read and simple to navigate through contents.</p><p>We are Tech lovers and talented Engineers hence we guarantee continues improvement to ensure you keep on coming back for better service.</p><p>Thank You</p><p>Developed by <a href=\"http://iasa.io\">IASA</a></p></div></div></div></div> ");
          }
        }
    }, out);
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "../layout/template.marko",
      "marko/taglibs/core/include-tag"
    ]
  };
