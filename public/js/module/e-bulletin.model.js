ebulletin.model = (function () {
  'use strict';
  var curryFetchData,curryStoreData,navigation,contact,account,dashboard;
  
  
  
  curryFetchData = function ( url ) {
    return function ( fn, id ) {
      id = id || '';
      $.get( url + id )
        .done( fn )
        .fail( function( jqxhr, text_status, error ) {
         alert( 'Error occured.' );
        });
    }
  };

  curryStoreData = function ( url ) {
    return function ( data_map, fn ) {
      $.post( url, data_map )
        .done( fn )
        .fail( function( jqxhr, text_status, error ) {
          alert( 'Error occured.' );
        });
    }
  };

  account = (function(){
	 var login,get_session,logout;
	 login = curryStoreData('/login');
   logout = curryFetchData('/logout');
	 get_session = curryFetchData('/getsession');
	  return {
      login:login,
	  get_session:get_session,
    logout:logout
    }
	}());
  contact= (function(){
 var get_contacts;

      get_contacts =curryFetchData ("/contacts");


    return {
      get_contacts:get_contacts
    }

   }());

dashboard = (function(){
  
   var submitdata,get_dashboard,delete_post;

     submitdata = curryStoreData("/upload");
     get_dashboard = curryFetchData("/get_dashboard");
     delete_post = curryStoreData("/delete_post");

    return {
    submitdata:submitdata,
    get_dashboard:get_dashboard,
    delete_post:delete_post
    }

   }());


navigation = (function(){
  
   var get_nav;

     get_nav = curryFetchData("/getnav");
     

    return {
    get_nav:get_nav
    }

   }());

    return {
    navigation : navigation,
    contact    :contact,
    account     :account,
    dashboard   :dashboard
  };
  }());
