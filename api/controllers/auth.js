
import User from "../models/User.js"
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'


const createError = require('../error')

export const register = async (req, res, next) => {
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

export const login = async (req, res, next) => {
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
