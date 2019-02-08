const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {
  res.send([{
    name: 'Disruptive',
    age: 47
  }, {
    name: 'Alpha',
    age: 46
  }, {
    name: 'Beta',
    age: 45
  }]);
});
// Get /users
// Give users a name prop and age prop

app.listen(3000);
module.exports.app = app;
