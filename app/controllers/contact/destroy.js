// Core
const mock = require('../../models/get-user.js')
const userSchema = require('../../models/userSchema.js');
const con = require('../../../db.js')

module.exports = class Destroy {
  constructor (app) {
    this.app = app

    this.run()
  }

  /**
   * Middleware
   */
  middleware () {
    this.app.delete('/contact/destroy/:id', (req, res) => {
      try {
        console.log('here')
        const queryString = 'DELETE from contact where id=' + req.params.id +';'
        
        con.query(queryString, (error, result, field) => {
          console.log(result)
          return res.status(200).send(result)
        })

      } catch (e) {
        console.error(`[ERROR] user/destroy/:id -> ${e}`)
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
