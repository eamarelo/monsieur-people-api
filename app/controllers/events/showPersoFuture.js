// Core
const jwt = require('jsonwebtoken')
const validator = require('node-validator')
const db = require("../../../db.js")
const jwtDecode = require('jwt-decode')
const {
    poolPromise
} = require('../../../db.js')

const dotenv = require('dotenv')


module.exports = class UserShow {
    constructor(app) {
        this.app = app

        this.run()
    }

    /**
     * Middleware
     */
    middleware() {
        this.app.get('/events/show/futur', async(req, res) => {
            try {
                const token = req.headers['x-access-token']
                if (!token) return res.status(401).send({
                    shows: false,
                    message: 'No token provided.'
                })
                jwt.verify(token, process.env.KEY_TOKEN, async(err) => {
                    if (err) return res.status(500).send({
                        shows: false,
                        message: 'Failed to authenticate token.'
                    })
                    let decoded = jwtDecode(token)
                    const events = `select events.nom as eventsName, events.description, dateEvent, categories.nom, events.photo from events 
                    inner join categories on categories.id = events.idCategorie inner join users_events on users_events.idEvent= events.id 
                    WHERE users_events.idUser = ${decoded._id} and users_events.end = 0`
                    let result = await db.promise().query(events)
                    let toto = []
                    for (var i = 0; i <= result[0].length - 1; i++) {
                        let user = {
                            eventsName: result[0][i].eventsName,
                            description: result[0][i].description,
                            dateEvent: result[0][i].dateEvent,
                            categorie: result[0][i].nom,
                            photo: result[0][i].photo
                        }
                        toto[i] = user
                    }
                    res.status(200).json(toto)
                })
            } catch (e) {

                console.error(`[ERROR] user/shows-> ${e}`)
                return res.status(400).json({
                    code: 400,
                    message: 'Bad request'
                })
            }
            return null
        })
    }

    /**
     * Run
     */
    run() {
        this.middleware()
    }
}