// Core
const mock = require('../../models/get-user.js')
const userSchema = require('../../models/userSchema.js');
const db = require('../../../db.js')
const con = require('../../../db.js')

module.exports = class Show {
  constructor (app) {
    this.app = app

    this.run()
  }

  /**
   * Middleware
   */
   middleware () {
    this.app.get('/contact/show/:id', (req, res) => {
      try {
        const queryString = `SELECT * FROM contact where id=${req.params.id};`
        
        con.query(queryString, (error, result, field) => {
          console.log(result)
          return res.status(200).send(result)
        })
      } catch (e) {
        console.error(`[ERROR] user/show/:id -> ${e}`)
        res.status(400).json({
          'code': 400,
          'message': 'Bad request'
        })
      }
    })
  }

  /**
   * Run
   */
   run () {
    this.middleware()
  }
}
