ebulletin.view_user = (function () {
			'use strict';
//---------------- BEGIN MODULE SCOPE VARIABLES --------------
var
configMap = {
	
	
	user_model:null,
	admin_user:null,
	change_option_anchor:null,	
    settable_map : {user_model:true,change_option_anchor:true,admin_user:true}
},
stateMap = {$container : undefined, anchor_map : {} ,resize_idto : undefined },
jqueryMap = {},
setJqueryMap,configModule,setcontent,onsubmit,helper,viewclicked, initModule;

// Begin DOM method /setJqueryMap/
setJqueryMap = function () {
	var $container = stateMap.$container;
	jqueryMap = {$contact_content : $container.find('.spa-contact-content')
					
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
helper = function(){

  }


viewclicked = function(){
	
}
setcontent = function(user_id){
        var form_data = {user_id:user_id};
		helper();
        /*
        configMap.user_model.view_user(form_data,function(data){
            html_data.user_data = data;
        stateMap.$container.html(Handlebars.templates.view_user( html_data));
        })*/
		stateMap.$container.html(Handlebars.templates.view_user());
		setJqueryMap();
}



initModule = function (id, $container ) {
	stateMap.$container = $container;
	stateMap.$container.off().empty();

	configMap.admin_user(function(response){
		if(!response){	
			configMap.change_option_anchor('home','ebulletin',( ( new Date() ).getSeconds() + 10000 ).toString( 36 ))	
		}
		else
			setcontent(id);
		
	})
};
    return { initModule : initModule,configModule:configModule };
}());