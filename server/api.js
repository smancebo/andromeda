const express = require('express');
const users = require('./routers/users/users.router');
const login = require('./routers/login/login.router');
const jwt = require('./utils/jwt');
const Util = require('./utils/util');

const router = express.Router();

const verifyToken = async (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers['x-access-token'];
  if (token) {
    const username = await jwt.verify(token).catch(() => {
      res.json(Util.ErrMsg('E_INV_TOKEN'));
    });
    req.username = username;
    next();
  } else {
    res.status(403).send(Util.ErrMsg('E_USR_NOT_AUTH'));
  }
};

router.use('/users', verifyToken, users);
router.use('/login', login);

router.post('/auth/verify', async (req, res) => {
  try {
    const { token } = req.body;
    await jwt.verify(token).catch((err) => { throw err; });
    res.json(Util.ErrMsg('VALID_TKN', { valid: true }));
  } catch (e) {
    res.json(Util.ErrMsg('E_INV_TOKEN'));
  }
});
router.get('*', (req, res) => {
  res.status(404).send(Util.ErrMsg('E_NOT_FOUND'));
});

module.exports = router;
