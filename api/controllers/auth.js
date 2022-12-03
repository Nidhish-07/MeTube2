const mongoose = require('mongoose')
const User = require("../models/User")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')


const createError = require('../error')

const singUp = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)

        const user = new User({ ...req.body, password: hash })

        await user.save()
        res.status(200).send("User has been created")
    } catch (error) {
        next(error)
        // createError(404, "Not found")
    }
}

const singIn = async (req, res, next) => {
    try {
        const user = await User.findOne({ name: req.body.name })

        if (!user) {
            return next(createError(404, "User not found"))
        }

        const isCorrect = bcrypt.compareSync(req.body.password, user.password)

        if (!isCorrect) {
            return next(createError(400, "Wrong Credentials"))
        }

        const token = jwt.sign({ id: user._id }, process.env.SECRET)
        const { password, ...otherDetails } = user._doc


        res.cookie("access_token", token, { httpOnly: true }).status(200).json(otherDetails)


    } catch (error) {
        console.log(error);
    }
}

module.exports = { singUp, singIn }