ebulletin.dashboard = (function () {
			'use strict';
//---------------- BEGIN MODULE SCOPE VARIABLES --------------
var
configMap = {
	
	
	dashboard_model:null,
	authorize_user:null,
	change_option_anchor:null,	
    settable_map : {dashboard_model:true,change_option_anchor:true,authorize_user:true}
},
stateMap = {$container : undefined, anchor_map : {} ,resize_idto : undefined },
jqueryMap = {},
copyAnchorMap,setJqueryMap,configModule,onTapAcct,setChatAnchor,onClickChat,setcontent,onsubmit,onsubmit2,ondashboard_delete, initModule;

// Begin DOM method /setJqueryMap/
setJqueryMap = function () {
	var $container = stateMap.$container;
	jqueryMap = {$contact_content : $container.find('.spa-contact-content'),
					$title: $container.find('#t_title'),
					$subject : $container.find('#s_subject'),
					$description : $container.find('#description'),
					$date_from : $container.find('#posting_date_from'),
					$date_to : $container.find('#posting_date_to'),
					$submit : $container.find('#submit'),
					$success_div : $container.find('.success_div'),
					$edit_button : $container.find('.ebulletin-dashboard-edit'),
					$delete_button : $container.find('.ebulletin-dashboard-delete')
				}
};

 configModule = function ( input_map ) {
    ebulletin.util.setConfigMap({
      input_map    : input_map,
      settable_map : configMap.settable_map,
      config_map   : configMap
    });
    return true;
  };

onsubmit2 = function(){
	var fileInput = document.querySelector('#f_file');
	console.log(fileInput)

	var value={title:jqueryMap.$title.val(),
			  // f_file:	fileInput.files[0],
			   subject:jqueryMap.$subject.val(),
			   description:jqueryMap.$description.val(),
			   date_from:jqueryMap.$date_from.val(),
			   date_to:jqueryMap.$date_to.val()
			  }	
	var form = new FormData(value);		  
	configMap.dashboard_model.submitdata(value,function(response){
		//jqueryMap.$success_div.html('<div class="alert alert-success">'+response+'</div>');
	});
}

onsubmit = function(){
  var fileInput = document.querySelector('#f_file');

	var xhr = new XMLHttpRequest();
	xhr.open('POST', '/upload');

	xhr.upload.onprogress = function(e) 
	{
		//configMap.wait_popup.show();
	};

	xhr.onload = function()
	{
		jqueryMap.$success_div.html('<div class="alert alert-success">'+xhr.responseText+'</div>');
	};

	// upload success
	if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0))
	{
		// if your server sends a message on upload sucess, 
		// get it with xhr.responseText
		console.log(xhr.responseText);
	}

	var form = new FormData();
	form.append('title', jqueryMap.$title.val());
	form.append('f_file', fileInput.files[0]);
	form.append('subject', jqueryMap.$subject.val());
	form.append('description', jqueryMap.$description.val());
	form.append('date_from', jqueryMap.$date_from.val());
	form.append('date_to', jqueryMap.$date_to.val());
	xhr.send(form);
	
}
ondashboard_delete = function(e){
	var value={},tr = $(this);
	var post_id = e.target.attributes[1].value;
	value.post_id = post_id;
	configMap.dashboard_model.delete_post(value,function(response){
		tr.parent().parent().remove();
	});

}
setcontent = function(){
configMap.dashboard_model.get_dashboard(function(response){
		stateMap.$container.html(Handlebars.templates.dashboard({dashboard_data:response}));
		setJqueryMap();
		$.fn.datepicker.defaults.format = "yyyy/mm/dd";
		jqueryMap.$date_from.datepicker({});
		jqueryMap.$date_to.datepicker({});
		jqueryMap.$submit.click(onsubmit);
		jqueryMap.$delete_button.click(ondashboard_delete);
	});

}



initModule = function ( $container ) {
	stateMap.$container = $container;
	stateMap.$container.off().empty();
	configMap.authorize_user(function(response){
		if(!response){	
			configMap.change_option_anchor('home','ebulletin',( ( new Date() ).getSeconds() + 10000 ).toString( 36 ))	
		}
		else
			setcontent();
		
	})
};
    return { initModule : initModule,configModule:configModule };
}());