//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

if(err)
return console.log('Unable to connect to mongodb database server: ', err);

console.log('Connected to mongodb database server');

// db.collection('Todos').deleteMany({text: 'Eat Dinner'}).then((result) => {
//   console.log(result);
// });

// db.collection('Todos').deleteOne({_id: new ObjectID('5a577f4119a2b1a2fcbd02eb')}).then((result) => {
//   console.log(result);
// });

db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  console.log(result);
});
db.close();
});
