/*var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/HNG';
MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function (err, client) {
	if (err) {
		 console.log(err);
		 }
		 var db = client.db('HNG');
		 db.collection('myMovies').updateOne({movie: 'The Banker', year: '2020', rating: 8} , {$set: {movie: 'Legend Of Zorro', year: 2005, rating: 7.5} }, function (err, result) {
		 	if (err) throw err;
		 	console.log('document Updated');
		 	});
		 	db.collection('myMovies').findOne({}, function(err, result) {
		 		if (err) throw err;
		 		console.log(result);
		 		});
		 	});*/
		 
