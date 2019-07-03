// Core
const db = require('../../../db.js')
const validator = require('node-validator')
const ClassSchema = require('../../models/classSchema.js');

module.exports = class Create {
  constructor (app) {
    this.app = app

    this.run()
  }

  /**
   * Middleware
   */
   middleware () {
    this.app.post('/class/create', (req, res) => {
      try {
        var classCours = new ClassSchema({ entitled: req.body.entitled, author: req.body.author, description: req.body.description, mode: req.body.mode, theme: req.body.theme });
        classCours.save(function (err) {
          if (err) return handleError(err);
          // saved!
          });

        res.status(200).json(classCours || {})
      } catch (e) {
        console.log(e)
        console.error(`[ERROR] classCours/create -> ${e}`)
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
