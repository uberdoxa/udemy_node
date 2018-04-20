var bodyParser = require('body-parser');
var express = require('express');



var {mongoose} = require('./db/mongoose');
var {Todo}     = require('./models/todo');
var {user}     = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
   // console.log(req.body);
   var todo = new Todo({ text: req.body.text});

   todo.save().then((doc)=>{
    res.send(doc);
   },(e)=>{
    res.status(400).send(e);
   });
});

app.listen(3000, ()=>{
  console.log('Started on port 3000');
});

module.exports = {app};
 // var newTodo = new Todo({text: 'Cook Dinner'});
 // newTodo.save().then((doc)=>{
 //  console.log('Saved Todo ',doc);
 // },(e)=>{
 //  console.log('Unable to save Todo');
 // });



 // var newTodo2 = new Todo({text: '  Go to sleep   '
 //                          });
 // newTodo2.save().then((doc)=>{
 //  console.log('Saved Todo ',doc);
 // },(e)=>{
 //  console.log('Unable to save Todo ',e);
 // });




//  var newUser = new User({name: 'Daniels',
//                          email: 'fsadf@fsdfkkl.com'});
// newUser.save().then((doc)=>{
//   console.log('Saved User ',doc);
// },
//   (e)=>{
//      console.log('Unable to save User ',e);
//   });

