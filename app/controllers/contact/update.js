// Core
const con = require('../../../db.js')
const mock = require('../../models/get-user.js')
const userSchema = require('../../models/userSchema.js');

module.exports = class Update {
  constructor (app) {
    this.app = app

    this.run()
  }

  /**
   * Middleware
   */
   middleware () {
    this.app.put('/contact/update/:id', (req, res) => {
      try {
        let body = req.body;

        let queryString = 'UPDATE contact SET ';

        Object.entries(body).forEach((value, index) => {
            if (Object.entries(body).length === index + 1) {
                queryString += `${value[0]} = '${value[1]}'`;
            } else {
                queryString += `${value[0]} = '${value[1]}',`;
            }
        })

        queryString += ` WHERE id=${req.params.id};`

        con.query(queryString, (error, result, field) => {
          console.log(result)
          return res.status(200).send(result)
        })

        console.log(queryString);

      } catch (e) {
        console.log(e)
        console.error(`[ERROR] user/update/:id -> ${e}`)
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
