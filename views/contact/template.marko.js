// Compiled using marko@4.4.28 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    template_template = marko_loadTemplate(require.resolve("../layout/template.marko")),
    hasRenderBodyKey = Symbol.for("hasRenderBody"),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag"));

function render(input, out) {
  var data = input;

  include_tag({
      _target: template_template,
      body: {
          renderBody: function renderBody(out) {
            out.w("<div class=\"row\"><div class=\"col l12\"><div class=\"contact z-depth-1\"><div class=\"map\"><div class=\"map-overlay\" onClick=\"style.pointerEvents='none'\"></div><iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7610457920696!2d36.833849914223144!3d-1.3190599990379255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11baa16c0735%3A0x8fcacefee7d829fb!2sMirage+Plaza%2C+Mombasa+Road%2C+Nairobi!5e0!3m2!1sen!2ske!4v1493636380823\" allowfullscreen></iframe></div><div class=\"contact-detail\"><div class=\"col l12 col m6 col s12\"><div class=\"title\">Contact Detail</div><div class=\"address\"><p><i class=\"fa fa-home\"></i> Tom mboya, Nairobi</p><p><i class=\"fa fa-phone\"></i> Phone: +254708901215</p><p><i class=\"fa fa-envelope\"></i> Email: techood1@gmail.com, bululu059@gmail.com</p><p><i class=\"mdi-action-perm-identity\"></i> Person: Abdulmanan Ahmed</p><p><i class=\"fa fa-map-marker\"></i> Postal code: 14446 00400</p></div><div class=\"social-icon\"><a href=\"https://www.facebook.com/nipashemedia/\"><i class=\"fa fa-facebook\"></i></a><a href=\"https://twitter.com/NipasheMedia\"><i class=\"fa fa-twitter\"></i></a><a href=\"javascript:void(0);\"><i class=\"fa fa-instagram\"></i></a><a href=\"javascript:void(0);\"><i class=\"fa fa-google-plus\"></i></a></div></div><div class=\"col l5 col m6 col s12\"><form name=\"sentMessage\" id=\"contactForm\" method=\"post\" action=\"#\"><div class=\"input-field\"><i class=\"mdi-action-perm-identity prefix\"></i><input id=\"name\" type=\"text\" class=\"validate\" required><label for=\"name\">Name</label></div><div class=\"input-field\"><i class=\"mdi-communication-email prefix\"></i><input id=\"email\" type=\"email\" class=\"validate\" required><label for=\"email\">Email</label></div><div class=\"input-field\"><textarea id=\"textarea1\" class=\"materialize-textarea\"></textarea><label for=\"textarea1\">Message Here</label></div><button class=\"btn btn-flat waves-effect waves-light shopping-cart-button right\" type=\"submit\" name=\"action\">Submit Now</button></form></div></div></div></div></div>");
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
