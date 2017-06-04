(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['contact'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return " <div class = \"col-md-12\">\r\n		<h1>contact us</h1>\r\n		\r\n \r\n    <label> <b>Name:</b></label> "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "<br>\r\n \r\n        <label> <b>Contact Number:</b></label>  "
    + alias4(((helper = (helper = helpers.contact || (depth0 != null ? depth0.contact : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"contact","hash":{},"data":data}) : helper)))
    + "\r\n\r\n\r\n        </div>\r\n ";
},"useData":true});
templates['content'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id = \"e-bulletin-main-content\" class=\"row\">\r\n		\r\n			<div class=\"col-md-12 ebulletin-navigtion\">\r\n				\r\n			</div>\r\n		\r\n	\r\n			<div class=\"col-md-12 ebulletin-content\">\r\n				\r\n			</div>\r\n			\r\n	</div>";
},"useData":true});
templates['dashboard'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "												<tr>\r\n														<td>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</td>\r\n														<td><span class=\""
    + alias4(((helper = (helper = helpers.stat || (depth0 != null ? depth0.stat : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"stat","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.stat || (depth0 != null ? depth0.stat : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"stat","hash":{},"data":data}) : helper)))
    + "</span></td>\r\n														<td>"
    + alias4(((helper = (helper = helpers.date_submited || (depth0 != null ? depth0.date_submited : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date_submited","hash":{},"data":data}) : helper)))
    + "</td>\r\n														<td><i class=\"fa fa-pencil-square-o ebulletin-dashboard-edit\" data-id="
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "></i>&nbsp;<i class=\"fa fa-trash ebulletin-dashboard-delete\" data-id="
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "></i></td>\r\n												</tr>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n				<div class=\"col-md-12 ebulletin-dashboard-content\">\r\n					<div class=\"row\">\r\n						<div class=\"col-md-12 ebulletin-dashboard-options\">\r\n							<div class=\"row\">\r\n								<div class=\"ebulletin-dashboard-options-left\">\r\n									<h4>Welcome To Your Dashboard</h4>\r\n								</div>\r\n								<div class=\"ebulletin-dashboard-options-right\">\r\n									<button type=\"button\" class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#ebulletin-add-post-container\">Add Post</button>\r\n								</div>\r\n							</div>\r\n					\r\n						</div>\r\n					</div>\r\n					<div class=\"row\">\r\n						<div class=\"col-md-12 ebulletin-dashboard-list\">\r\n							<div class=\"col-md-12 \">\r\n								<h4>Posts</h4>\r\n							</div>\r\n							<div class = \"row\">\r\n								<div class=\"col-md-12\">\r\n								<table class=\"table ebulletin-dashboard-table\">\r\n									<thead>\r\n									  <tr>\r\n										<th>Title</th>\r\n										<th>Status</th>\r\n										<th>Date Submitted</th>\r\n										<th>Action</th>\r\n									  </tr>\r\n									</thead>\r\n									<tbody>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.dashboard_data : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "									</tbody>\r\n								  </table>\r\n								</div>\r\n							</div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n\r\n		\r\n		<!-- Modal -->\r\n			<div id=\"ebulletin-add-post-container\" class=\"modal fade\" role=\"dialog\">\r\n				  <div class=\"modal-dialog\">\r\n\r\n					<!-- Modal content-->\r\n					<div class=\"modal-content\">\r\n					  <div class=\"ebulletin-dahboard-modal-header modal-header\">\r\n						<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n						<h4 class=\"modal-title\">Add Post</h4>\r\n					  </div>\r\n					  <div class=\"modal-body ebulletin-add-post-modal-body\">\r\n							<div class=\"form-group success_div text-center\">\r\n								\r\n							</div>\r\n							 <div class=\"form-group\">\r\n								  <label for=\"focusedInput\">Title</label>\r\n								  <input class=\"form-control\" id=\"t_title\" type=\"text\">\r\n							</div>\r\n							 <div class=\"form-group\">\r\n								  <label for=\"focusedInput\">Subject</label>\r\n								  <input class=\"form-control\" id=\"s_subject\" type=\"text\">\r\n							</div>\r\n							 <div class=\"form-group\">\r\n								  <label for=\"focusedInput\">File</label>\r\n								  <input class=\"form-control\" id=\"f_file\" type=\"file\">\r\n							</div>\r\n							<div class=\"form-group\">\r\n							  <label for=\"comment\">Description:</label>\r\n							  <textarea class=\"form-control\" rows=\"5\" id=\"description\"></textarea>\r\n							</div>\r\n							<div class=\"form-group\">\r\n								<div class=\"row\">\r\n									<div class=\"col-md-12\">\r\n										<label for=\"comment\">Posting Date:</label>\r\n									</div>\r\n									<div class=\"col-md-5\">\r\n										<input class=\"form-control\" id=\"posting_date_from\" placeholder=\"From\"  type=\"text\">\r\n									 </div>\r\n									 <div class=\"col-md-5\">\r\n										<input class=\"form-control\" id=\"posting_date_to\" placeholder=\"To\"  type=\"text\">\r\n									 </div>\r\n								</div>\r\n							</div>\r\n					  </div>\r\n					  <div class=\"modal-footer\">\r\n						<button type=\"button\" class=\"btn btn-primary\" id = \"submit\">Submit</button>\r\n						<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n					  </div>\r\n					</div>\r\n\r\n				  </div>\r\n			</div>";
},"useData":true});
templates['dropdown_options'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return alias4(((helper = (helper = helpers.option || (depth0 != null ? depth0.option : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"option","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.nCaption || (depth0 != null ? depth0.nCaption : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nCaption","hash":{},"data":data}) : helper)));
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "		<div class=\"ebulletin-navigatioin-dropdown dropdown\">\r\n                    <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Welcome "
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\r\n                    <span class=\"caret\"></span></button>\r\n                    <ul class=\"ebulletin-nav-right-list-li dropdown-menu\">\r\n		  "
    + ((stack1 = (helpers.list || (depth0 && depth0.list) || alias2).call(alias1,(depth0 != null ? depth0.dropdown : depth0),{"name":"list","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n\r\n		  </ul>\r\n					        </div>";
},"useData":true});
templates['home'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return " <div class = \"col-md-9\">\r\n	 <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n    <!-- Indicators -->\r\n    <ol class=\"carousel-indicators\">\r\n      <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n      <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n      <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n      <li data-target=\"#myCarousel\" data-slide-to=\"3\"></li>\r\n    </ol>\r\n\r\n    <!-- Wrapper for slides -->\r\n    <div class=\"carousel-inner\" role=\"listbox\">\r\n\r\n      <div class=\"item active\">\r\n        <img src=\"../demo/i3.jpg\" alt=\"Chania\" width=\"760\" height=\"345\">\r\n        <div class=\"carousel-caption\">\r\n          <h3>Chania</h3>\r\n          <p>The atmosphere in Chania has a touch of Florence and Venice.</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"item\">\r\n        <img src=\"../demo/i2.jpg\" alt=\"Chania\" width=\"760\" height=\"345\">\r\n        <div class=\"carousel-caption\">\r\n          <h3>Chania</h3>\r\n          <p>The atmosphere in Chania has a touch of Florence and Venice.</p>\r\n        </div>\r\n      </div>\r\n    \r\n      <div class=\"item\">\r\n        <img src=\"../demo/i1.jpg\" alt=\"Flower\" width=\"760\" height=\"345\">\r\n        <div class=\"carousel-caption\">\r\n          <h3>Flowers</h3>\r\n          <p>Beautiful flowers in Kolymbari, Crete.</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"item\">\r\n        <img src=\"../demo/i2.jpg\" alt=\"Flower\" width=\"760\" height=\"345\">\r\n        <div class=\"carousel-caption\">\r\n          <h3>Flowers</h3>\r\n          <p>Beautiful flowers in Kolymbari, Crete.</p>\r\n        </div>\r\n      </div>\r\n  \r\n    </div>\r\n\r\n    <!-- Left and right controls -->\r\n    <a class=\"left carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\r\n      <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n    <a class=\"right carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\r\n      <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Next</span>\r\n    </a>\r\n  </div>\r\n      \r\n\r\n        </div>\r\n \r\n  <div class = \"col-md-3\">\r\n		<h1>Home</h1>\r\n		\r\n \r\n    <label> Welcome To Home<br>\r\n \r\n      \r\n\r\n        </div>\r\n ";
},"useData":true});
templates['post_request'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "													<tr>\r\n															<td>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</td>\r\n															<td>"
    + alias4(((helper = (helper = helpers.poser || (depth0 != null ? depth0.poser : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"poser","hash":{},"data":data}) : helper)))
    + "</td>\r\n															<td><span class=\""
    + alias4(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"status","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"status","hash":{},"data":data}) : helper)))
    + "</span></td>\r\n															<td>May 20 2017</td>\r\n															<td class=\"ebulletin-post_request_action\" data-id = \""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + ((stack1 = (helpers.viewed || (depth0 && depth0.viewed) || alias2).call(alias1,(depth0 != null ? depth0.viewed : depth0),{"name":"viewed","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</td>\r\n													</tr>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return " ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n				<div class=\"col-md-12 ebulletin-post_request-content\">\r\n					<div class=\"row\">\r\n						<div class=\"col-md-12 ebulletin-post_request-options\">\r\n							<div class=\"row\">\r\n								<div class=\"ebulletin-post_request-options-left\">\r\n									<h4>Post Request Management</h4>\r\n								</div>\r\n								<div class=\"ebulletin-post_request-options-right\">\r\n									<button type=\"button\" class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#ebulletin-add-post-container\">Add Post</button>\r\n								</div>\r\n							</div>\r\n					\r\n						</div>\r\n					</div>\r\n					<div class=\"row\">\r\n						<div class=\"col-md-12 ebulletin-post_request-list\">\r\n							<div class=\"col-md-12 \">\r\n								<h4>Posts</h4>\r\n							</div>\r\n							<div class = \"row\">\r\n								<div class=\"col-md-12\">\r\n								<table class=\"table ebulletin-post_request-table\">\r\n									<thead>\r\n									  <tr>\r\n										<th>Title</th>\r\n                    <th>Posted by</th>\r\n										<th>Status</th>\r\n										<th>Date Submitted</th>\r\n										<th>Action</th>\r\n									  </tr>\r\n									</thead>\r\n									<tbody>\r\n										   <!-- Data Here -->\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.dashboard_data : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "												<!-- data -->\r\n									</tbody>\r\n								  </table>\r\n								</div>\r\n							</div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n\r\n		";
},"useData":true});
templates['users'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "													<tr>\r\n															<td>"
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + "</td>\r\n															<td>"
    + alias4(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"username","hash":{},"data":data}) : helper)))
    + "</td>\r\n															<td>"
    + alias4(((helper = (helper = helpers.whole_name || (depth0 != null ? depth0.whole_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"whole_name","hash":{},"data":data}) : helper)))
    + "</td>\r\n															<td class=\"ebulletin-post_request_action\" data-id = \""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><i class=\"fa fa-pencil-square-o ebulletin-dashboard-edit\" data-id="
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "></i>&nbsp;<i class=\"fa fa-trash ebulletin-dashboard-delete\" data-id="
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "></i></td>\r\n													</tr>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\r\n				<div class=\"col-md-12 ebulletin-post_request-content\">\r\n					<div class=\"row\">\r\n						<div class=\"col-md-12 ebulletin-post_request-options\">\r\n							<div class=\"row\">\r\n								<div class=\"ebulletin-post_request-options-left\">\r\n									<h4>User Management</h4>\r\n								</div>\r\n								<div class=\"ebulletin-post_request-options-right\">\r\n									<button type=\"button\" class=\"btn btn-success\" data-toggle=\"modal\" id =\"ebulletin-user-add-btn\">Add User</button>\r\n								</div>\r\n							</div>\r\n					\r\n						</div>\r\n					</div>\r\n					<div class=\"row\">\r\n						<div class=\"col-md-12 ebulletin-post_request-list\">\r\n							<div class=\"col-md-12 \">\r\n								<h4>Users</h4>\r\n							</div>\r\n							<div class = \"row\">\r\n								<div class=\"col-md-12\">\r\n								<table class=\"table ebulletin-post_request-table\">\r\n									<thead>\r\n									  <tr>\r\n										<th>Type</th>\r\n                                        <th>Username</th>\r\n										<th>Name</th>\r\n										<th>Action</th>\r\n									  </tr>\r\n									</thead>\r\n									<tbody>\r\n										   <!-- Data Here -->\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.user_data : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "												<!-- data -->\r\n									</tbody>\r\n								  </table>\r\n								</div>\r\n							</div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n\r\n		";
},"useData":true});
templates['view_post'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return " \r\n\r\n					<div class=\"row\">\r\n						<div class =\"col-md-4 col-md-offset-4 post_container\">\r\n							<div class=\"row\">\r\n										<div class =\"col-md-12\">\r\n											<div class=\"form-group\">\r\n													<label for=\"focusedInput\">Title</label>\r\n													<input class=\"form-control\" id=\"t_title\" type=\"text\" value =\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\">\r\n											</div>\r\n										</div>\r\n							</div>\r\n\r\n							<div class=\"row\">\r\n										<div class =\"col-md-12\">\r\n											<div class=\"form-group\">\r\n													<label for=\"focusedInput\">Subject</label>\r\n													<input class=\"form-control\" id=\"s_subject\" type=\"text\" value = \""
    + alias4(((helper = (helper = helpers.subject || (depth0 != null ? depth0.subject : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"subject","hash":{},"data":data}) : helper)))
    + "\">\r\n											</div>\r\n									</div>\r\n							</div>\r\n\r\n							<div class=\"row\">\r\n										<div class =\"col-md-12\">					\r\n												<div class=\"form-group\">\r\n														<label for=\"focusedInput\">File</label>\r\n													<img src=\"../upload/"
    + alias4(((helper = (helper = helpers.filename || (depth0 != null ? depth0.filename : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"filename","hash":{},"data":data}) : helper)))
    + "\" class=\"img-rounded\" alt=\"Cinque Terre\" width=\"304\" height=\"236\">\r\n												</div>\r\n									</div>\r\n							</div>\r\n\r\n							<div class=\"row\">\r\n										<div class =\"col-md-12\">	\r\n												<div class=\"form-group\">\r\n													<label for=\"comment\">Description:</label>\r\n													<textarea class=\"form-control\" rows=\"5\" id=\"description\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</textarea>\r\n												</div>\r\n										</div>\r\n							</div>\r\n\r\n							<div class=\"row\">\r\n										<div class =\"col-md-12\">\r\n											<div class=\"form-group\">\r\n												<div class=\"row\">\r\n													<div class=\"col-md-12\">\r\n														<label for=\"comment\">Posting Date:</label>\r\n													</div>\r\n													<div class=\"col-md-5\">\r\n														<input class=\"form-control\" id=\"posting_date_from\" placeholder=\"From\" value =\""
    + alias4(((helper = (helper = helpers.posting_date_from || (depth0 != null ? depth0.posting_date_from : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"posting_date_from","hash":{},"data":data}) : helper)))
    + "\"  type=\"text\">\r\n													</div>\r\n													<div class=\"col-md-5\">\r\n														<input class=\"form-control\" id=\"posting_date_to\" placeholder=\"To\"  value =\""
    + alias4(((helper = (helper = helpers.posting_date_to || (depth0 != null ? depth0.posting_date_to : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"posting_date_to","hash":{},"data":data}) : helper)))
    + "\"  type=\"text\">\r\n													</div>\r\n												</div>\r\n											</div>\r\n					 					</div>\r\n							</div>\r\n							<div class=\"row\">\r\n										<div class =\"col-md-12\">\r\n											<button type=\"button\" class=\"btn btn-success\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" id = \"Approve\">Approve</button>\r\n											<button type=\"button\" class=\"btn btn-danger\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" id = \"Reject\">Reject</button>\r\n										</div>\r\n							</div>\r\n					</div>\r\n				</div>	";
},"useData":true});
})();
