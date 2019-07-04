// Core
const con = require('../../../db.js')
const mock = require('../../models/get-user.js')
const validator = require('node-validator')

// const check = validator.isObject()
// .withRequired('ids', validator.isArray())

module.exports = class Search {
  constructor (app) {
    this.app = app

    this.run()
  }

  /**
   * Middleware
   */
   middleware () {
    this.app.get('/contact/search', (req, res) => {
      try {
      	console.log('here')
      	const queryString = 'SELECT * FROM contact'
      	
      	con.query(queryString, (error, result, field) => {
      		console.log(result)
      		return res.status(200).send(result)
      	})
        } catch (e) {
          console.error(`[ERROR] user/search -> ${e}`)
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
