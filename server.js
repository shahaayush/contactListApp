var express = require('express');
var app = express();
var mongojs=require('mongojs');
var db=mongojs('contactList',['contactList']);

app.use(express.static(__dirname+"/public"));

app.get('/contactList',function(req,res){

	console.log("I recieved GET request")
	db.contactList.find(function(err,docs){

		console.log(docs);
		res.json(docs);
	});
});

app.listen(3000);

console.log("Server is running at port 3000");
