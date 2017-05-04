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
            out.w("<div class=\"row\"><div class=\"col l12 col m12 col s12\"><div class=\"about z-depth-1\"><div class=\"col l12  col m12 col s12\"><p><b> Privacy Policy</b></p><p>Your privacy is important to us.</p><p>It is Nipashe Media's policy to respect your privacy regarding any information we may collect while operating our website. Accordingly, we have developed this privacy policy in order for you to understand how we collect, use, communicate, disclose and otherwise make use of personal information. We have outlined our privacy policy below.</p><p><b>NipasheMedia.com</b> a Kenyan news agreggater website with contents from local and international news publisher, blogs and live stream tv channels.</p><h2><b>General Privacy Policy</b></h2><ol><li> As of to-date, we do not collect any direct user information eg. Names, Email, Phone Number etc. from our audience.</li><li>We use Google analytics to collect site usage information eg. site trafic which does not collect information about user identity. </li><li>We also use third party advertisement eg. Google Adsense on NipasheMedia. Thats how we make money to run NipasheMedia.<a href=\"https://www.google.com/policies/privacy/partners/\">Find more on Google uses your data. </a></li><li>We do not use cookies yet.</li></ol></div></div></div></div>");
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
