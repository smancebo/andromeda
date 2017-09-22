const sql = require('mssql');
// const User = require('../models/user');
const dbConfig = require('../../config/config');
const Util = require('../../utils/util');


class UserDA {
  static async create(user) {
    try {
      const pool = await sql.connect(dbConfig).catch(Util.handleReject);
      if (pool) {
        const result = await pool.request()
          .input('id', sql.Int, user.id)
          .input('username', sql.VarChar(50), user.username)
          .input('branch_id', sql.Int, user.branch_id)
          .input('password', sql.VarChar(100), await Util.createPassword(user.password, user.username))
          .input('name', sql.VarChar(200), user.name)
          .input('email', sql.VarChar(200), user.email)
          .input('enabled', sql.Bit, user.enabled)
          .execute('INSERT_USER')
          .catch(Util.handleReject);
        await sql.close();
        return result;
      }
    } catch (e) {
      await sql.close();
      return e;
    }
    return undefined;
  }

  static async get(username) {
    try {
      const pool = await sql.connect(dbConfig).catch(Util.handleReject);
      if (pool) {
        const result = await pool.request()
          .input('username', sql.VarChar(50), username)
          .execute('GET_USER')
          .catch(Util.handleReject);
        await sql.close();
        if (result.recordset.length > 0) {
          return result.recordset;
        }
        return [];
      }
    } catch (e) {
      await sql.close();
      return e;
    }
    return undefined;
  }
}

module.exports = UserDA;
