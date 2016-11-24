const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    return console.log('Unable to connect to mongo server');
  }
  console.log('Connected to MongoDb Server');

//delete many
  // db.collection('Todos').deleteMany({text: 'study node'}).then((result) => {
  //   console.log(result);
  // });
//delete one
  // db.collection('Todos').deleteOne({text: 'study node'}).then((result) => {
  //   console.log(result);
  // });
//find one and delete
  // db.collection('Todos').findOneAndDelete({text: 'study node'}).then((result) => {
  //   console.log(result);
  // });

  //db.close();
});
