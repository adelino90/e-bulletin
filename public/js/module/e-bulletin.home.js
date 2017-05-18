ebulletin.home = (function () {
			'use strict';
//---------------- BEGIN MODULE SCOPE VARIABLES --------------
var
configMap = {
	
	

	changeAnchorPart:null,	
    settable_map : {changeAnchorPart:true}
},
stateMap = {$container : undefined, anchor_map : {} ,resize_idto : undefined },
jqueryMap = {},
copyAnchorMap,setJqueryMap,configModule,onTapAcct,setChatAnchor,onClickChat,setcontent, onResize, initModule;

// Begin DOM method /setJqueryMap/
setJqueryMap = function () {
	var $container = stateMap.$container;
	jqueryMap = {
        $contact_content : $container.find('.spa-contact-content')
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


stateMap.$container.html(Handlebars.templates.home( ));


}



initModule = function ( $container ) {
	// load HTML and map jQuery collections
	stateMap.$container = $container;
	stateMap.$container.off().empty();
	setcontent();
	setJqueryMap();
	
	// initialize chat slider and bind click handler
	
	};
    return { initModule : initModule,configModule:configModule };
}());