const express = require('express');
const router = express.Router({ mergeParams: true });
const { refreshJwt, loginUser } = require('./controller');

router
  .post('/', loginUser)
  .get('/refresh-jwt', refreshJwt);

module.exports = router;
