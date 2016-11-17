var express = require('express');
var app = express();
var mongojs=require('mongojs');
var db=mongojs('contactList',['contactList']);
var bodyParser=require('body-parser')

app.use(express.static(__dirname+"/public"));
app.use(bodyParser.json());

app.get('/contactList',function(req,res){

	console.log("I recieved GET request")
	db.contactList.find(function(err,docs){

		console.log(docs);
		res.json(docs);
	});
});

app.post('/contactList',function(req,res){
	console.log(req.body);
	db.contactList.insert(req.body,function(err,doc){
		res.json(doc);
	});
});

app.listen(3000);

console.log("Server is running at port 3000");
