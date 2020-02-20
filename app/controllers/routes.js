const Show = require("./user/show.js")
const Create = require("./user/create.js")
const Search = require("./user/search.js")
const Update = require("./user/update.js")
const Destroy = require("./user/destroy.js")
const Authentification = require("./auth/authentification.js")
const Verification = require("./auth/verification.js")
const Login = require("./auth/login.js")
const Bot = require("./bot/bot.js")

module.exports = {
    user: {
        Show,
        Create,

    },
    auth: {
        Login
    },
    bot: {
        Bot
    }
}