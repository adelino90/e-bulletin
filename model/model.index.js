
var config=require('../config.json');
const sql = require('mssql');

login = function(data,callback){

            sql.close();
		    user=data.username;
		    pass=data.password;
		    sql.connect(config).then(pool => {
			    
			return pool.request()
			.input('input_parameter', sql.NVarChar, user)
			.input('input_parameter2', sql.NVarChar, pass)
			.query('select * from ebulletin_account_tbl where username = @input_parameter AND password=@input_parameter2')
			}).then(result => {
				callback(result)
			});
}
get_navigation = function(session,callback){

    	var menu = {navigation:[{bEnabled:true,bGranted:true,bVisible:true,nCaption:"HOME",nId:1,option:"home"},
			{bEnabled:true,bGranted:true,bVisible:true,nCaption:"CONTACT US",nId:2,option:"contact"},
			{bEnabled:true,bGranted:true,bVisible:true,dropdown:true,dropdown_options:[{id:1,option:(session.usertype == 2 ? "dashboard" : "manage_posts"),nCaption:(session.usertype == 2 ? "My Dashboard" : "Manage Posts")},
			{id:2,option:"sign_out",nCaption:"Sign Out"}],nCaption:"Welcome",nId:3,option:"none"}
			],name:session.name};
            callback(menu);
}


save_post = function(data,callback){
            sql.close();
	        sql.connect(config).then(pool => {
			return pool.request()
			.input('user_id', sql.Int, data.user_ID)
			.input('title', sql.NVarChar, data.title)
			.input('subject', sql.NVarChar, data.subject)
			.input('filename', sql.NVarChar, data.name)
			.input('description', sql.NVarChar, data.description)
			.input('pdate_from', sql.NVarChar, data.date_from)
			.input('pdate_to',  sql.NVarChar,data.date_to)
			.input('status',  sql.NVarChar, false)
			.execute('insert_post')
		}).then(result => {
			callback(true);
			console.dir(result)
		}).catch(err => {
			// ... error checks
			console.log(err) 
		})	
        sql.on('error', err => {
            console.log(err)
        })
}

post_delete = function(id,callback){
      sql.close();
	  sql.connect(config).then(pool => {
	  return pool.request()
	  .input('post_id', sql.Int, id)
	  .execute('delete_post')
	  }).then(result => {
	     callback(result.recordset)
	  }).catch(err => {
			callback(err) 
	  })	
	  sql.on('error', err => {
		    callback(err)
	 })
}

get_dashboard = function(session_id,callback){
      sql.close();
	  sql.connect(config).then(pool => { 
			return pool.request()
			.input('user_id', sql.Int, session_id)
			.execute('get_dashboard')
		}).then(result => {
			callback(result.recordset)
		}).catch(err => {
			callback(err) 
		})
		sql.on('error', err => {
			callback(err)
		})

}
get_admin_dashboard = function(id,callback){
      sql.close();
	  sql.connect(config).then(pool => {
			return pool.request()
			.input('user_id', sql.Int, id)
			.execute('admin_post_view')
		}).then(result => {
			callback(result.recordset)
		}).catch(err => {
			// ... error checks
			console.log(err) 
		})
		
        sql.on('error', err => {
            console.log(err)
        })
}

view_post = function(data,callback){
	var id = data.id, user_id = data.user_id
	console.log(data);
	  sql.close();
	sql.connect(config, err => {

   new sql.Request()
		.input('user_id', sql.Int,user_id)
		.input('id', sql.Int,id)
		.query('INSERT into post_tbl_view(post_id,user_id) values (@id, @user_ID)', (err, result) => {
		console.log(err);
	})
    new sql.Request()
		.input('id', sql.Int, id)
		.execute('view_post', (err, result) => {
			callback(result.recordset)
		})
	})
	sql.on('error', err => {
		callback(err)
	})


}
approve_request = function(id,callback){
	var id = id;
	sql.close();
	sql.connect(config, err => {
    new sql.Request()
		.input('post_id', sql.Int, id)
		.execute('approve_request', (err, result) => {
			console.log(result)
			callback("OK");
		})
	})
	sql.on('error', err => {
		callback(err)
	})
}
exports.approve_request = approve_request;
exports.view_post = view_post;
exports.get_admin_dashboard = get_admin_dashboard;
exports.get_dashboard = get_dashboard;
exports.post_delete = post_delete;
exports.save_post = save_post;
exports.get_navigation = get_navigation;
exports.login = login;