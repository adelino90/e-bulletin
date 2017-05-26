var config=require('../config.json');
const sql = require('mssql');
var path = require('path');
var account = require('../model/account');
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
	account.get_navigation(session,function(data){
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
	account.login(data,function(result){

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
	 odata.date_to = req.body.to;
	 account.save_post(odata,function(rdata){
		 if(rdata)
		 	res.send('Success!');
	 })
   

  });
	
});

app.post('/delete_post', function(req,res){

	post_id = req.body.post_id;

	account.post_delete(post_id,function(ret){
		res.send(ret);
	});

});


app.get('/get_dashboard',function(req,res){

	  session_id =  req.session.user_ID;
	 account.get_dashboard(session_id,function(ret){
		 res.send(ret);
	 });
});


app.get('/file', function(req,res){
	 res.render('upload',{});
});

app.get('/manage_posts', function(req,res){
	 account.get_admin_dashboard(function(ret){
		 res.send(ret);
	 })
});

}