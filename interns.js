
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/HNG";
MongoClient.connect(url, /*{useNewUrlParser: true, useUnifiedTopology: true}, */ function(err, client) {
if (err) {
	console.log(err);
}
var db = client.db('HNG');
var collection = db.collection('Interns');
collection.insertOne({name: 'Alchemist'}, (err, result) => {
	if (err) throw err;
	console.log('Interns collection created');
	})
	db.createCollection('myMovies');
     db.collection('myMovies').insertMany([{movie: 'The Banker', year: '2020', rating: 8},
     	 {movie: 'Bad Boys', year: '2020', rating: 7}, {movie: 'The Hunt', year: '2020', rating: 7},
     	 {movie: 'Bloodshot', year: '2020', rating: 7.5}, {movie: 'First Cow', year: '2020', rating: 6.5}], (err, result) => {
     	 	if (err) throw err;
     	 	console.log(result);
     	 	client.close();
     	 	})
    module.export = db;
});
