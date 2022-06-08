const express = require('express');
const usersRouter = express.Router();

usersRouter.use((req, res, next) => {
  console.log("A request is being made to /users");

//   res.send({ message: 'hello from /users!' });
next(); 
});

const { getAllUsers } = require('../db');

usersRouter.get('/', (req, res) => {

    const users = await getAllUsers();

    res.send({
      users: []
    });
  });

module.exports = usersRouter;