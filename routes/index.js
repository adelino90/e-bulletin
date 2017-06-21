var config=require('../config.json');
const sql = require('mssql');
var path = require('path');
var model = require('../model/model.index');
var sess;
module.exports.controller = function(app) {
app.get('/', function(req, res, next) {
 res.render('index',{title:"E-Buletin Website"});

});

app.get('/logout', function(req, res, next) {
 	req.session.destroy(function(err) {
	 	res.send("Session Destroyed");
	})
});

app.get('/getnav',function(req, res, next) {
	var session = req.session;
	model.get_navigation(session,function(data){
		res.send(data);
	});
});

app.get('/get_bulletin',function(req, res, next) {
	model.get_bulletin(function(data){
		res.send(data);
	});
});

app.post('/get_post',function(req, res) {
	var odata ={id:req.body.id, user_id:req.session.user_ID};
	console.log(odata);
	model.view_post(odata,function(data){
		res.send(data);
	});
});

app.post('/view_user',function(req, res) {
	var id = req.body.id
	model.view_user(id,function(data){
		res.send(data);
	});
});

app.post('/update_user',function(req, res) {
	var data = {}
	data.user_id = req.body.user_id
	data.fname = req.body.fname
	data.lname = req.body.lname
	data.username = req.body.username
	data.password = req.body.password
	data.user_type = req.body.user_type
	console.log(data);
	model.update_user(data,function(response){
		console.log(response);
		res.send(response);
	});
});
app.post('/insert_user',function(req, res) {
	var data = {}
	data.fname = req.body.fname
	data.lname = req.body.lname
	data.username = req.body.username
	data.password = req.body.password
	data.user_type = req.body.user_type
	console.log(data);
	model.insert_user(data,function(response){
		console.log(response);
		res.send(response);
	});
});
app.get('/get_users',function(req, res) {
	model.get_all_users(function(data){
		res.send(data);
	});
});

app.get('/contacts',function(req, res) {
	var contact = "09054440337";
	var name = "Adelino R. Justo";
	
	var data = {name : name , contact:contact};
	
	res.send(data);
	
	
});
app.get('/getsession',  function(req,res){
	if(req.session.user_ID)
	 res.send({valid:"true"});
	else 
	 res.send({valid:"false"});

});
app.get('/getadminsession',function(req,res){
	if(req.session.req.session.usertype==1)
	 res.send({valid:"true"});
	else 
	 res.send({valid:"false"});

});
app.post('/login',function(req,res){
	var data = req.body;
	model.login(data,function(result){

				if(result.recordset.length>0){
					  req.session.user_ID = result.recordset[0].id;
					  req.session.name = result.recordset[0].first_name;
					  req.session.usertype = result.recordset[0].user_type_id;
					  res.send({valid:true,name:req.session.name})
				}
				else
				 res.send({valid:false})
		});
	
});

app.post('/upload',function(req,res){

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
	 
	 var odata = {};
	 odata.user_ID = req.session.user_ID;
	 odata.title = req.body.title;
	 odata.subject = req.body.subject;
	 odata.name = name;
	 odata.description = req.body.description;
	 odata.date_from = req.body.date_from;
	 odata.date_to = req.body.date_to;
	 model.save_post(odata,function(rdata){
		 if(rdata)
		 	res.send('Success!');
	 })
   

  });
	
});

app.post('/approve_request',function(req,res){
	var id = req.body.id;
	model.approve_request(id,function(result){
			if(result="OK")
				res.send("OK");
	})

})


app.post('/delete_post', function(req,res){

	post_id = req.body.post_id;

	model.post_delete(post_id,function(ret){
		res.send(ret);
	});

});


app.get('/get_dashboard',function(req,res){

	  session_id =  req.session.user_ID;
	 model.get_dashboard(session_id,function(ret){
		 res.send(ret);
	 });
});


app.get('/file', function(req,res){
	 res.render('upload',{});
});

app.get('/manage_posts', function(req,res){
	var user_id = req.session.user_ID;
	 model.get_admin_dashboard(user_id,function(ret){
		 res.send(ret);
	 })
});

}