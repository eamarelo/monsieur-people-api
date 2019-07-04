const Show = require('./user/show.js')
const Search = require('./user/search.js')
const Update = require('./user/update.js')
const Destroy = require('./user/destroy.js')
const Authentification = require('./auth/authentification.js')
const Verification = require('./auth/verification.js')
const Login = require('./auth/login.js')
const Create = require('./class/create.js')
const GetClass = require('./class/get.js')
const GetOneClass = require('./class/getOneClass.js')
const CreateContact = require('./contact/create.js')
const SearchContact = require('./contact/search.js')
const DeleteContact = require('./contact/destroy.js')
const ShowContact = require('./contact/show.js')
const UpdateContact = require('./contact/update.js')

module.exports = {
  user: {
    Show,
    Search,
    Update,
    Destroy
  },
  auth: {
  	Authentification,
  	Verification,
  	Login
  },
  class: {
    GetClass,
    Create,
    GetOneClass
  }, 
  contact: {
    CreateContact,
    SearchContact,
    DeleteContact,
    ShowContact,
    UpdateContact
  }
}
