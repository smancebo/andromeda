const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwt');


class JWT {
  static sign(payload) {
    const signPromise = new Promise((resolve, reject) => {
      jwt.sign(payload, jwtConfig.secret, { expiresIn: '24h' }, (err, token) => {
        if (err) reject(err);
        resolve(token);
      });
    });

    return signPromise;
  }

  static verify(token) {
    const verifyPromise = new Promise((resolve, reject) => {
      jwt.verify(token, jwtConfig.secret, (err, decode) => {
        if (err) reject(err);
        resolve(decode);
      });
    });
    return verifyPromise;
  }
}

module.exports = JWT;
