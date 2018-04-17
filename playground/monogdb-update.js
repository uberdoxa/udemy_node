//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Unable to connect to Mongodb Server');
  }
    console.log('Connected to Mongodb Server');

  // db.collection('Todos').findOneAndUpdate({_id: new ObjectID(`5ad50f7ca321d4563005dbb5`)},
  //   {
  //     $set :{completed: true}
  //   },
  //   {returnOriginal: false}).then((result)=>{
  //    console.log(result);
  //   });

    db.collection('Users').findOneAndUpdate({_id: new ObjectID(`5ad50ba01336cd55fd6cfa46`)},
    {
      $set :{name: 'Quintus'
             },
        $inc: { age: 2}
    },{returnOriginal: false}).then((result)=>{
     console.log(result);
    });

     // db.close();


});







