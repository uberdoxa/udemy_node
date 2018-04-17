//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Unable to connect to Mongodb Server');
  }
    console.log('Connected to Mongodb Server');


    //  db.collection('Todos').deleteMany({name: 'Viathon'})
    //    .then((result)=>{
    //     console.log(result);

    // },(err)=>{
    //   console.log('Unable to getch todos ',err);
    // });

    //    db.collection('Todos').deleteOne({name: 'Viathon'})
    //    .then((result)=>{
    //     console.log(result);

    // },(err)=>{
    //   console.log('Unable to getch todos ',err);
    // });

  // db.collection('Todos').findOneAndDelete({completed: false})
  //      .then((result)=>{
  //       console.log(result);

  //   },(err)=>{
  //     console.log('Unable to getch todos ',err);
  //   });


 // db.collection('Users').deleteMany({name: 'Viathon'})
 //       .then((result)=>{
 //        console.log(result);

 //    },(err)=>{
 //      console.log('Unable to getch todos ',err);
 //    });

       db.collection('Users').findOneAndDelete({_id: new ObjectID(`5ad50b63cdd6bc55e9161d2e`)})
       .then((result)=>{
        console.log(JSON.stringify(result,undefined,2));

    },(err)=>{
      console.log('Unable to getch todos ',err);
    });

     // db.close();

});








