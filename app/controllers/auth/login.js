// Dependencies

const validator = require('node-validator')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const db = require("../../../db.js")
const dotenv = require('dotenv')


// Core
const check = validator.isObject()
    .withRequired('email', validator.isString())
    .withRequired('password', validator.isString())

module.exports = class Login {
    constructor(app) {
        this.app = app
        this.run()
    }



    /**
     * Middleware
     */
    middleware() {
        this.app.post('/login', validator.express(check), async(req, res) => {
            try {

                const userCheck = `select * from users where email = '${req.body.email}'`
                const result = await db.promise().query(userCheck)
                const user = result[0][0]

                if (result[0].length === 0) {
                    return res.status(401).json({
                        message: 'Authentication failed. User not found.',
                        auth: false
                    })
                }
                if (!bcrypt.compareSync(req.body.password, user.password)) {
                    return res.status(401).json({
                        message: 'Authentication failed. Wrong password.',
                        auth: false
                    })
                }
                return res.status(200).json({
                    token: jwt.sign({
                        email: user.email,
                        mdp: user.password,
                        nom: user.nom,
                        prenom: user.prenom,
                        _id: user.id
                    }, process.env.KEY_TOKEN),
                    auth: true
                })
            } catch (e) {
                console.log('login user')
                console.error(`[ERROR] user/login -> ${e}`)
                return res.status(400).json({
                    code: 400,
                    message: 'Bad request'
                })
            }
        })
    }

    /**
     * Run
     */
    run() {
        this.middleware()
    }
}