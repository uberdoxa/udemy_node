//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Unable to connect to Mongodb Server');
  }
    console.log('Connected to Mongodb Server');


    db.collection('Todos').insertOne({
       text: 'Something to do',
       completed: false},
       (err,result)=>{
      if(err){
        return console.log('Unable to insert todo ',err);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });

    //

    db.collection('Users').insertOne({
       name: 'Viathon',
       age: 77,
       location: 'Oblivion'},
       (err,result)=>{
      if(err){
        return console.log('Unable to insert todo ',err);
        }
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
    });


     db.close();

});








