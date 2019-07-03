// Core
const con = require('../../../db.js')
const mock = require('../../models/get-user.js')
const validator = require('node-validator')
const userSchema = require('../../models/userSchema.js');

module.exports = class Create {
  constructor (app) {
    this.app = app

    this.run()
  }

  /**
   * Middleware
   */
   middleware () {
    this.app.post('/contact/create', (req, res) => {
      try {
        const {
              nom,
              prenom,
              telephone,
              adresse,
              ville
            } = req.body
        const queryString = `INSERT INTO contact (nom, prenom, telephone, adresse, ville)
        VALUES (?, ?, ?, ?, ?)`
        con.query(queryString, [ nom, prenom, telephone, adresse, ville])
        return res.status(200).json(queryString)
      } catch (e) {
        console.log(e)
        console.error(`[ERROR] contact/create -> ${e}`)
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
