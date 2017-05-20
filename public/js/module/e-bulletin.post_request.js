ebulletin.post_request = (function () {
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
copyAnchorMap,setJqueryMap,configModule,onTapAcct,setChatAnchor,onClickChat,setcontent,onsubmit, initModule;

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


setcontent = function(){
		stateMap.$container.html(Handlebars.templates.post_request());
		setJqueryMap();
		$.fn.datepicker.defaults.format = "yyyy/mm/dd";
		jqueryMap.$date_from.datepicker({});
		jqueryMap.$date_to.datepicker({});

}



initModule = function ( $container ) {
	stateMap.$container = $container;
	stateMap.$container.off().empty();
			setcontent();
};
    return { initModule : initModule,configModule:configModule };
}());