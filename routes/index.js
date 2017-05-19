var config=require('../config.json');
const sql = require('mssql');
var path = require('path');
var sess;


exports.index = function(req, res, next) {
 res.render('index',{title:"E-Buletin Website"});

}

exports.logout = function(req, res, next) {
 req.session.destroy(function(err) {
	 res.send("Session Destroyed");
})

}

exports.getnav = function(req, res, next) {
var menu = {navigation:[{bEnabled:true,bGranted:true,bVisible:true,nCaption:"HOME",nId:1,option:"home"},
			{bEnabled:true,bGranted:true,bVisible:true,nCaption:"CONTACT US",nId:2,option:"contact"},
			{bEnabled:true,bGranted:true,bVisible:true,dropdown:true,dropdown_options:[{id:1,option:"dashboard",nCaption:"My Dashboard"},{id:2,option:"sign_out",nCaption:"Sign Out"}],nCaption:"Welcome",nId:3,option:"none"}
            
],name:req.session.name};
res.send(menu);

}


exports.contact = function(req, res) {
	var contact = "09054440337";
	var name = "Adelino R. Justo";
	
	var data = {name : name , contact:contact};
	
	res.send(data);
	
	
}
exports.session = function(req,res){
	if(req.session.user_ID)
	 res.send({valid:"true"});
	else 
	 res.send({valid:"false"});

}
exports.login = function(req,res){
	sql.close();
		 user=req.body.username;
		 pass=req.body.password;
		sql.connect(config).then(pool => {
			    
			return pool.request()
			.input('input_parameter', sql.NVarChar, user)
			.input('input_parameter2', sql.NVarChar, pass)
			.query('select * from ebulletin_account_tbl where username = @input_parameter AND password=@input_parameter2')
			}).then(result => {
				if(result.recordset.length>0){
					  req.session.user_ID = result.recordset[0].id;
					  req.session.name = result.recordset[0].first_name;
					  res.send({valid:true,name:req.session.name})
				}
				else
				 res.send({valid:false})
			});
	
}

exports.upload = function(req,res){

	if (!req.files)
    return res.status(400).send('No files were uploaded.');
 
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file 
  var sampleFile = req.files.f_file;
  var name = req.files.f_file.name;
  console.log(req.body);
  // Use the mv() method to place the file somewhere on your server 
  sampleFile.mv('./public/upload/'+name+'', function(err) {
    if (err)
      return res.status(500).send(err);
	  sql.close();
	  sql.connect(config).then(pool => {

   		 // Stored procedure 
    
			return pool.request()
			.input('user_id', sql.Int, req.session.user_ID)
			.input('title', sql.NVarChar, req.body.title)
			.input('subject', sql.NVarChar, req.body.subject)
			.input('filename', sql.NVarChar, name)
			.input('description', sql.NVarChar, req.body.description)
			.input('pdate_from', sql.NVarChar, req.body.date_from)
			.input('pdate_to',  sql.NVarChar, req.body.date_to)
			.input('status',  sql.NVarChar, false)
			.execute('insert_post')
		}).then(result => {
			 res.send('Success!');
			console.dir(result)
		}).catch(err => {
			// ... error checks
			console.log(err) 
		})
		
	sql.on('error', err => {
		console.log(err)
	})
   
  });
	
}

exports.post_delete = function(req,res){
	post_id = req.body.post_id;
	  sql.close();
	  sql.connect(config).then(pool => {

   		 // Stored procedure 
    
			return pool.request()
			.input('post_id', sql.Int, post_id)
			.execute('delete_post')
		}).then(result => {
			res.send(result.recordset)
		}).catch(err => {
			// ... error checks
			console.log(err) 
		})
		
	sql.on('error', err => {
		console.log(err)
	})
}


exports.get_dashboard = function(req,res){
	  sql.close();
	  sql.connect(config).then(pool => {

   		 // Stored procedure 
    
			return pool.request()
			.input('user_id', sql.Int, req.session.user_ID)
			.execute('get_dashboard')
		}).then(result => {
			res.send(result.recordset)
		}).catch(err => {
			// ... error checks
			console.log(err) 
		})
		
	sql.on('error', err => {
		console.log(err)
	})
}
exports.file = function(req,res){

	 res.render('upload',{});
}