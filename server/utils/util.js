const bcrypt = require('bcrypt-nodejs');
const ErrCodes = require('./error.codes');

class Util {
  static handleReject(err) {
    throw err;
  }

  static createPassword(str, username) {
    const passwordPromise = new Promise((resolve, reject) => {
      bcrypt.hash(`${username}${str}${username}`, null, null, (err, hash) => {
        if (err) reject(err);
        resolve(hash);
      });
    });
    return passwordPromise;
  }

  static comparePassword(str, username, password) {
    const comparePasswordPromise = new Promise((resolve, reject) => {
      bcrypt.compare(`${username}${str}${username}`, password, (err, res) => {
        if (err) reject(err);
        resolve(res);
      });
    });
    return comparePasswordPromise;
  }

  static ErrMsg(code, assign) {
    let err = ErrCodes.filter(e => e.code === code)[0];
    if (assign) err = Object.assign(err, assign);
    return err;
  }
}
module.exports = Util;
