const router = require ('express').Router()
const  { login, addPost } = require('../../controllers/user-controller') 

const { authMiddleware } = require('../../utils/auth')

router.route('/login').post(login)
router.route('/addpost').post(addPost)

module.exports = router