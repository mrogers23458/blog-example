const User = require('../models/User')
//jwt sign token import form auth 
const { signToken } = require('../utils/auth')

module.exports = {
    async login({ body }, res) {
        const user = await User.findOne({username: body.username})
        if (!user) {
            return res.status(400).json({message: 'Admin not found, please try again'})
        }

        const passCheck = await User.isCorrectPassword(body.password)

        if (!passCheck) {
            return res.status(400).json({message: 'Wrong password for admin'})
        }
s
        const token = signToken(user)
        res.json({ token, user })
    },

    async addPost(req, res) {
        console.log(req.body)
        return res.status(400).json({message: 'post successfully added'})
    }
}
