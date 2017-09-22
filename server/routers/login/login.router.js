const express = require('express');
const userDa = require('../../data-access/users/users.da');
const Util = require('../../utils/util');
const jwt = require('../../utils/jwt');

const router = express.Router();

router.post('/', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = (await userDa.get(username).catch((err) => { throw err; }))[0];
    if (user) {
      if (await Util.comparePassword(password, user.username, user.password)
        .catch((err) => { throw err; })) {
        if (user.enabled) {
          const token = await jwt.sign({ username: user.username }).catch((err) => {
            throw err;
          });
          res.json(Util.ErrMsg('USR_SUCCESS', { token, username }));
        }
        res.json(Util.ErrMsg('E_USR_DISABLED'));
      }
      res.json(Util.ErrMsg('E_BAD_USR_PASS'));
    }
  } catch (e) {
    res.json(Util.ErrMsg('E_SRV_ERR', { e }));
  }
  res.json(Util.ErrMsg('E_BAD_USR_PASS'));
});

module.exports = router;
