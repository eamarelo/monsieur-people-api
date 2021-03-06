// Dependencies
const {
    createServer
} = require('http')
const fs = require("fs")
const bodyParser = require('body-parser')
const compression = require('compression')
const cors = require('cors')
const express = require('express')
const helmet = require('helmet')
const con = require('../db.js')

const dotenv = require('dotenv')
const userSchema = require('./models/userSchema.js')
    // Core
const routes = require('./controllers/routes.js')

/**
 * Server
 */
module.exports = class Server {
    constructor() {
        this.app = express()
        this.options = {}
        this.run()
    }

    /**
     * Middleware
     */
    middleware() {
        this.app.use(compression())
        this.app.use(cors())
        this.app.use(bodyParser.urlencoded({
            'extended': true
        }))
        this.app.use(bodyParser.json())
    }

    /**
     * Routes
     */
    routes() {
        new routes.user.Show(this.app)
        new routes.user.Create(this.app)


        new routes.auth.Login(this.app)

        new routes.bot.Bot(this.app)
        new routes.events.EventsShow(this.app)
        new routes.events.EventsPersoF(this.app)
        new routes.events.EventsPersoP(this.app)

        // If route not exist
        this.app.use((req, res) => {
            res.status(404).json({
                'code': 404,
                'message': 'Not Found'
            })
        })
    }

    /**
     * Security
     */
    security() {
        this.app.use(helmet())
        this.app.disable('x-powered-by')
    }

    /**
     * Run
     */
    run() {
        try {
            this.con
            this.security()
            this.middleware()
            this.routes()
            createServer(this.app).listen(process.env.PORT || 3000)
            console.log(process.env.PORT)

        } catch (e) {
            console.error(`[ERROR] Server -> ${e}`)
        }
    }
}