//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Unable to connect to Mongodb Server');
  }
    console.log('Connected to Mongodb Server');


    // db.collection('Todos').find({_id: new ObjectID('5ad514dfeeda07d903a3d677')})
    //   .toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));


    // },(err)=>{
    //   console.log('Unable to getch todos ',err);
    // });


   // db.collection('Todos').find()
   //    .count().then((count)=>{
   //      console.log(`Todos count: ${count}`);

   //  },(err)=>{
   //    console.log('Unable to getch todos ',err);
   //  });


    db.collection('Users').find({name: 'Viathon'})
      .toArray().then((docs)=>{
        console.log('Todos');
        console.log(JSON.stringify(docs,undefined,2));


    },(err)=>{
      console.log('Unable to getch todos ',err);
    });


     // db.close();

});








