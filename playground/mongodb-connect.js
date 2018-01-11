//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

if(err)
return console.log('Unable to connect to mongodb database server: ', err);

console.log('Connected to mongodb database server');

// db.collection('Todos').insertOne({
//   text: 'Something to do',
//   completed: false
// }, (err, result) => {
//   if(err)
//   return console.log('Unable to insert todo: ', err);
//
//   console.log(JSON.stringify(result.ops, undefined, 2));
// });

// db.collection('Users').insertOne({
//   name: 'Anshu Goyal',
//   age: 28,
//   location: 'Chandigarh'
// }, (err, result) => {
//   if(err)
//   return console.log('Unable to insert a user object ');
//
//   console.log(result.ops[0]._id.getTimestamp());
// });

// db.collection('Todos').find({completed: true}).toArray().then((docs) => {
//   console.log(docs);
// }, (err) => {
//   console.log(`Unable to fetch docs ${err}`);
// });

db.collection('Users').find({_id: new ObjectID('5a54947b7052e41578e6ebfe')}).toArray().then((docs) => {
  console.log(docs);
}, (err) => {
  console.log('Unable to fetch Users', err);
});

db.close();
});
