
const {ObjectID} = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');


//Todo.remove({}) - Removes all

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({id: '5a897c1ff0b370083a0968e6'}).then((todo) => {
    console.log(todo)
});

Todo.findByIdAndRemove('5a898272e0e11d550a16b75a').then((todo) => {
    console.log(todo);
});
