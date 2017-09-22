
const express = require('express');
const userDa = require('../../data-access/users/users.da');
const User = require('../../models/user');


const router = express.Router();

router.post('/setup', async (req, res) => {
  const user = new User();
  user.username = req.body.username;
  user.password = req.body.password;
  user.name = req.body.name;
  user.email = req.body.email;
  user.enabled = false;
  const result = await userDa.create(user);

  res.json(result);
});

router.get('/get/:username?', async (req, res) => {
  const { username } = req.params;
  res.json(await userDa.get(username));
});

module.exports = router;
