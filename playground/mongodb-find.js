//mongod.exe --dbpath /Users/afidalgo/mongo-data

// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var user = {name: 'Alfonso', age: 33};
// var {name} = user; //ES6 feature, object destructuring
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    return console.log('Unable to connect to mongo server');
  }
  console.log('Connected to MongoDb Server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('583383d1503f0d2d24e6e18c')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users')
  .find({age: 33})
  .toArray()
  .then((res) => {
    console.log(`Filtered user: ${JSON.stringify(res, undefined, 2)}`);
  });

  //db.close();
});
