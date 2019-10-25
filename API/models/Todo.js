const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Todo
let Todo = new Schema({
  Todo: {
    type: String
  },
  TodoDescription: {
    type: String
  },
  DueDate: {
    type: Date
  }
},{
    collection: 'Todo'
});

module.exports = mongoose.model('Todo', Todo);