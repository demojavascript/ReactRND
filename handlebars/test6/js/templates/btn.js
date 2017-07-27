(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['btn'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<button name=\"sasD\">"
    + container.escapeExpression(((helper = (helper = helpers.btn_title || (depth0 != null ? depth0.btn_title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"btn_title","hash":{},"data":data}) : helper)))
    + "</button>";
},"useData":true});
})();