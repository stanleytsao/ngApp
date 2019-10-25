const express = require('express');
const app = express();
const todoRoutes = express.Router();

// Require Todo model in our routes module
let Todo = require('../models/Todo');

// Defined store route
todoRoutes.route('/add').post(function (req, res) {
  let todo = new Todo(req.body);
  todo.save()
    .then(todo => {
      res.status(200).json({'Todo': 'Todo has been successfully added'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
todoRoutes.route('/').get(function (req, res) {
  Todo.find(function (err, todos){
    if(err){
      console.log(err);
    }
    else {
      res.json(todos);
    }
  });
});

// Defined edit route
todoRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Todo.findById(id, function (err, todo){
      res.json(todo);
  });
});

//  Defined update route
todoRoutes.route('/update/:id').post(function (req, res) {
  Todo.findById(req.params.id, function(err, todo) {
    if (!todo)
      res.status(404).send("Record not found");
    else {
      todo.TodoName = req.body.TodoName;
      todo.TodoDescription = req.body.TodoDescription;
      todo.TodoPrice = req.body.TodoPrice;

      todo.save().then(todo => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
todoRoutes.route('/delete/:id').get(function (req, res) {
    Todo.findByIdAndRemove({_id: req.params.id}, function(err, todo){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = todoRoutes;