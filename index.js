var _ = require('underscore');
var mongodb = require('mongodb');
var uri = 'mongodb://localhost:27017/example';
mongodb.MongoClient.connect(uri, function(error, db) {
  if(error) {
    console.log("failed to connect");
    process.exit(1);
  }
  db.collection('sample').insert({name: "DALI",country: "tunis"}, function(error, result) {
    if (error) {
      console.log("failed to insert data");
      process.exit(1);
    }
    db.collection('sample').find().toArray(function(error, docs) {
      console.log(docs);
      process.exit(1);
    });
  });
}); 

_.each([1,2,3], function(v) {
  console.log(v);
}) 
