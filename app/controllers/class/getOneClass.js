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
    this.app.get('/class/get/details/:id', (req, res) => {
      try {
        ClassSchema.findOne({_id: req.params.id}, function (err, classRecord) { 
          if (err || classRecord === null) {
            res.status(404).json({
              code: 404,
              message: 'classRecord not found'
            })
          }
          else{
            // const formatClass = classRecord => (
            //   classRecord.map(classRecord => ({
            //     id: classRecord._id,
            //     entitled: classRecord.entitled
            //   }))
            // )
            res.status(200).json(classRecord)
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
