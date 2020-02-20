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
        this.app.get('/user/show', async(req, res) => {
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
                    const user = `select users.nom, users.prenom, users.email, users.idFileul, users.idParain, users.photo,
                      classes.nom as class_name, classes.section
                     from users inner join users_classes on users_classes.idUser = users.id 
                     inner join classes  on users_classes.idClasse = classes.id
                     where users.nom = '${decoded.nom}' and users.prenom = '${decoded.prenom}' `
                    const result = await db.promise().query(user)
                    const toto = {
                        nom: result[0][0].nom,
                        prenom: result[0][0].prenom,
                        email: result[0][0].email,
                        idFileul: result[0][0].idFileul,
                        idParain: result[0][0].idParain,
                        photo: result[0][0].photo,
                        classe: result[0][0].class_name,
                        section: result[0][0].section
                    }
                    return res.status(500).send(toto)
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