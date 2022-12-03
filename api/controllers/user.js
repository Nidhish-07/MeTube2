const createError = require("../error")
const User = require('../models/User')

const updateUser = async (req, res, next) => {

    if (!req.params.id === req.user.id) {
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, { new: true })

            res.status(200).json(updatedUser)
        } catch (error) {

        }
    } else {
        return next(createError(403, "You can update only your account"))
    }
}
const deleteUser = (req, res, next) => {

}
const getUser = (req, res, next) => {

}
const subscribe = (req, res, next) => {

}
const unsubscribe = (req, res, next) => {

}
const like = (req, res, next) => {

}
const dislike = (req, res, next) => {

}

module.exports = { updateUser, deleteUser, getUser, subscribe, unsubscribe, like, dislike }