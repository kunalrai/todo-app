var Todo = require('../controller/todo.server.controller');


module.exports = function(app){
  

    app.get('/api/todos',Todo.getTodo);

 // create user and send back all todos after creation
    app.post('/api/todos', Todo.createTodo);

       // delete a todo
    app.delete('/api/todos/:todo_id', Todo.deteteTodo);
  };

