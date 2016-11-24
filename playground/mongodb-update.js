const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    return console.log('Unable to connect to mongo server');
  }
  console.log('Connected to MongoDb Server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('583383d1503f0d2d24e6e18c')
  // }, {
  //   $set: {  //update operators from reference
  //     completed: false
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });


  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('58374e44ea0304892306a533')
  }, {
    $inc: {
      age: 1
    },
    $set: {
      name: 'Paco'
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });


  //db.close();
});
