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
    this.app.get('/class/get', (req, res) => {
      try {
        ClassSchema.find({}, function (err, classRecord) { 
          if (err || classRecord === null) {
            res.status(404).json({
              code: 404,
              message: 'classRecord not found'
            })
          }
          else{
            const formatClass = classRecord => (
              classRecord.map(classRecord => ({
                id: classRecord._id,
                entitled: classRecord.entitled,
                author: classRecord.author,
                description: classRecord.description,
                mode: classRecord.mode,
                theme: classRecord.theme
              }))
            )
            console.log(formatClass(classRecord))
            res.status(200).json(formatClass(classRecord))
          }
        });
        
      } catch (e) {
        console.log(e)
        console.error(`[ERROR] classRecorded/create -> ${e}`)
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
