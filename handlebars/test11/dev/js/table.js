this["MyApp"] = this["MyApp"] || {};
this["MyApp"]["templates"] = this["MyApp"]["templates"] || {};
this["MyApp"]["templates"]["table"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "		<tr>\n			<td>"
    + alias3((helpers.addOne || (depth0 && depth0.addOne) || alias2).call(alias1,(data && data.index),{"name":"addOne","hash":{},"data":data}))
    + "</td>\n			<td>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</td>\n			<td>"
    + alias3(((helper = (helper = helpers.age || (depth0 != null ? depth0.age : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"age","hash":{},"data":data}) : helper)))
    + "</td>\n			<td>"
    + ((stack1 = container.invokePartial(partials.btndelete,depth0,{"name":"btndelete","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</td>\n		</tr>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n<table>\n	<thead>\n		<tr>\n			<td>S.No</td>\n			<td>Name</td>\n			<td>Age</td>\n			<td>Action</td>\n		</tr>\n	</thead>\n	<tbody>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.students : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</tbody>\n</table>	";
},"usePartial":true,"useData":true});