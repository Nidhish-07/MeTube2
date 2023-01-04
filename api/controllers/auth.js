
const User = require("../models/User")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')


const createError = require('../error')

const register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(8)
        const hash = bcrypt.hashSync(req.body.password, salt)

        const user = new User({ ...req.body, password: hash })

        await user.save()
        res.status(200).send("User has been created")
    } catch (error) {
        // next(createError(error))
        next(error)
    }
}

const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username })

        if (!user) {
            return next(createError(404, "User not found"))
        }

        const validPassword = bcrypt.compareSync(req.body.password, user.password)

        if (!validPassword) {
            return next(createError(400, "Wrong Credentials"))
        }

        const token = jwt.sign({ id: user._id }, process.env.SECRET)
        const { password, ...otherDetails } = user._doc


        res.cookie("access_token", token, { httpOnly: true }).status(200).json(otherDetails)


    } catch (error) {
        next(error)
    }
}

module.exports = { register, login }