const {MongoClient, ObjectID} = require('mongodb')

// const MongoClient = mongodb.MongoClient

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionUrl, {useNewUrlParser: true}, (error, client) => {
  if(error){
    return console.log('Unable to connect to Database');
  }
  const db = client.db(databaseName);

//   db.collection('tasks').insertMany([
//     {
//         description: 'Clean the house',
//         completed: true
//     },{
//         description: 'Renew inspection',
//         completed: false
//     }
// ], (err,result) => {
//   if (error) {
//     return console.log('Unable to insert tasks!') }
//         console.log(result.ops)
// });
})