  const express = require('express');
  const router = express.Router();
  const user = require("../controllers/user.controllers")

  router.post('/signup', user.signup);
  router.post('/login', user.login);
  router.get('/getuser', user.getuser);
  router.get('/getuser_profile/:email', user.getUsersProfile);
  router.delete('/deleteuser/:id', user.deleteUser)

  module.exports = router;