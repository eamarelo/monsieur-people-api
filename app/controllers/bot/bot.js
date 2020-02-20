// Core
const jwt = require('jsonwebtoken')
const validator = require('node-validator')
const jwtDecode = require('jwt-decode')
const {
    poolPromise
} = require('../../../db.js')

const dotenv = require('dotenv')


// Core
const check = validator.isObject()
    .withRequired('question', validator.isString())


module.exports = class Bot {
    constructor(app) {
        this.app = app

        this.run()
    }

    /**
     * Middleware
     */
    middleware() {
        this.app.post('/bot', validator.express(check), async(req, res) => {
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
                    if (req.body.question == 'bonjour') {
                        return res.status(200).send({
                            shows: true,
                            message: [`Salut ${decoded.nom} ${decoded.prenom}, je suis Paul, ton assistant personnel! Pour démarrer peut-tu me donner tes centres d'intérêts`, 'test']
                        })
                    }
                    return res.status(200).send({
                        shows: true,
                        message: 'je ne comprend pas votre demande'
                    })

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