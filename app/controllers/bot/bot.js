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
                            message: `Salut ${decoded.nom} ${decoded.prenom}, je suis Paul, ton assistant personnel! Pour démarrer peux-tu me donner tes centres d'intérêts`
                        })
                    }
                    if (req.body.question == 'interets') {
                        return res.status(200).send({
                            shows: true,
                            message: `Les catégories qui pourrait vous intéresser sont : SPORT , MUSIQUE , SOIREE , CDI , STAGE , ALTERNANCE . Tapez les mots clés dans le chat pour les mettres dans vos favories`
                        })
                    }
                    if (req.body.question == 'sport') {
                        return res.status(200).send({
                            shows: true,
                            message: `La catégorie SPORT a été ajoutée à vos favoris. Tu peux aussi aller sur la page Event pour les retrouver`
                        })
                    }
                    if (req.body.question == 'musique') {
                        return res.status(200).send({
                            shows: true,
                            message: `La catégorie MUSIQUE a été ajoutée à vos favoris. Tu peux aussi aller sur la page Event pour les retrouver`
                        })
                    }

                    if (req.body.question == 'soiree') {
                        return res.status(200).send({
                            shows: true,
                            message: `La catégorie SOIREE a été ajoutée à vos favoris. Tu peux aussi aller sur la page Event pour les retrouver`
                        })
                    }

                    if (req.body.question == 'cdi') {
                        return res.status(200).send({
                            shows: true,
                            message: `La catégorie CDI a été ajoutée à vos favoris. Tu peux aussi aller sur la page Event pour les retrouver`
                        })
                    }

                    if (req.body.question == 'stage') {
                        return res.status(200).send({
                            shows: true,
                            message: `La catégorie STAGE a été ajoutée à vos favoris. Tu peux aussi aller sur la page Event pour les retrouver`
                        })
                    }
                    if (req.body.question == 'alternance') {
                        return res.status(200).send({
                            shows: true,
                            message: `La catégorie ALTERNANCE a été ajoutée à vos favoris. Tu peux aussi aller sur la page Event pour les retrouver`
                        })
                    }

                    if (req.body.question == 'musique stage') {
                        return res.status(200).send({
                            shows: true,
                            message: `C'est génial! A partir de maintenant je t'enverrai des offres à partir de ce que tu m'as dis. Tu peux aussi aller sur la page Event pour les retrouver`
                        })
                    }
                    if (req.body.question == 'club') {
                        return res.status(200).send({
                            shows: true,
                            message: `La première règle du FIGHT CLUB ... `
                        })
                    }

                    if (req.body.question == 'elfe') {
                        return res.status(200).send({
                            shows: true,
                            message: `Clémence n'est pas disponible pour le moment. veuillez réessayer plus tard`
                        })
                    }
                    if (req.body.question == 'girl') {
                        return res.status(200).send({
                            shows: true,
                            message: `THIS GIRL IS ON FIRE !!!`
                        })
                    }

                    if (req.body.question == 'help') {
                        return res.status(200).send({
                            shows: true,
                            message: `Les mots que je comprends sont: 
                            bonjour ,
                            interets ,
                            club ,
                            elfe , 
                            girl
                            `
                        })
                    }

                    return res.status(200).send({
                        shows: true,
                        message: 'Je ne comprends pas votre demande'
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