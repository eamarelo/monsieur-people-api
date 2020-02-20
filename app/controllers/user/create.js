// Dependencies

const validator = require('node-validator')
const db = require("../../../db.js")
const dotenv = require('dotenv')
const bcrypt = require('bcrypt')
const saltRounds = 10
const jwt = require('jsonwebtoken')

// Core
const check = validator.isObject()
    .withRequired('nom', validator.isString())
    .withRequired('prenom', validator.isString())
    .withRequired('email', validator.isString())
    .withRequired('idRole', validator.isNumber())
    .withOptional('idFileul', validator.isNumber())
    .withOptional('idParain', validator.isNumber())
    .withRequired('password', validator.isString())
    .withRequired('photo', validator.isString())

module.exports = class Create {
    constructor(app) {
        dotenv.config()

        this.app = app
        this.run()
    }

    /**
     * Middleware
     */
    middleware() {
        this.app.post('/user/create', validator.express(check), async(req, res) => {
            try {
                const userCheck = `select * from users where email = '${req.body.email}'`
                let result = await db.promise().query(userCheck)
                if (result[0].length !== 0) {
                    res.status(401).json({
                        code: 401,
                        message: 'user already exist'
                    })
                } else {

                    const nom = req.body.nom || null
                    const prenom = req.body.prenom || null
                    const email = req.body.email || null
                    const idRole = req.body.idRole || null
                    const idFileul = req.body.idFileul || null
                    const idParain = req.body.idParain || null
                    const password = req.body.password || null
                    const photo = req.body.photo || null

                    const userCreate = `INSERT INTO users (nom, prenom, email, idRole, idFileul, idParain, password, photo)` +
                        `VALUES (` +
                        `'${nom}', '${prenom}','${email}',${idRole},${idFileul}, ${idParain}, '${bcrypt.hashSync(password, saltRounds)}', ${photo})`

                    result = await db.promise().query(userCreate)

                    const user = `select * from users where email = '${req.body.email}' `
                    result = await db.promise().query(user)
                    const toto = {
                        token: jwt.sign({
                                email: result[0][0].email,
                                mdp: result[0][0].password,
                                nom: result[0][0].nom,
                                prenom: result[0][0].prenom,
                                _id: result[0][0].id
                            },
                            process.env.KEY_TOKEN)
                    }
                    res.status(200).json(toto)
                }


            } catch (e) {

                console.log('create user')
                console.error(`[ERROR] user/create -> ${e}`)
                res.status(400).json({
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