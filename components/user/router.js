const express = require('express');
const router = express.Router({ mergeParams: true });
const { createUser,
  retrieveUser,
  updateUser,
  deleteUser
 } = require('./controller');

router
  .get('/:userId', retrieveUser)
  .post('/', createUser)
  .put('/:userId', updateUser)
  .delete('/:userId', deleteUser);

module.exports = router;
