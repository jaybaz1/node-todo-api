
const {ObjectID} = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');

const { User } = require('./../server/models/user');

var userId = '5a8201e370e87fa10579a95b';

// var id = '5a85f997fec75819068e602811';

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id no found');
//     }
//     console.log('Todo by id', todo);
// }).catch((e) => {
//     console.log(e);
// })

User.findById(userId).then((user) => {
    if(!user){
        return console.log('User no found');
    }
    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
})
