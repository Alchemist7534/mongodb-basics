var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/mydb';
MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
	if (err) {
		console.log(err);
		}
		var db = client.db('HNG');
		db.collection('myMovies').findOne({}, function (err, result) {
			if (err) throw err;
			console.log(result);
			});
	db.collection('myMovies').find({'rating': 7}).toArray( function(err, result) {
		if (err) throw err;
		console.log(result);
		});
          db.collection('myMovies').find({}, { projection: { _id: 0, movie: 1 } }).toArray((err, result) => {
          	if (err) throw err;
          	console.log(result);
          	client.close();
          	});
		});
