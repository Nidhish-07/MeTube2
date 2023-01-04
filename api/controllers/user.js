const createError = require("../error")
const User = require('../models/User')

const updateUser = async (req, res, next) => {

    if (req.params.id === req.user.id) {
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, { new: true })

            res.status(200).json(updatedUser)
        } catch (error) {
            next(error)
            console.log(error);
        }
    } else {
        return next(createError(403, "You can update only your account"))
    }
}
const deleteUser = async (req, res, next) => {

    if (req.params.id === req.user.id) {
        try {

            await User.findByIdAndDelete(req.params.id)
            res.status(200).json("User has been deleted")
        } catch (error) {
            next(error)
        }
    }
    else {
        return next(createError(403, "You cannot delete this account"))
    }

}
const getUser = async (req, res, next) => {

    try {
        const user = await User.findById(req.params.id)

        res.status(200).json(user)

    } catch (error) {
        next(error)
    }
}
const subscribe = async (req, res, next) => {
    try {
        await User.findByIdAndUpdate(req.user.id, { $push: { subscribedUsers: req.params.id } })
        await User.findByIdAndUpdate(req.params.id, { $inc: { subscribersNumber: 1 } })
        res.status(200).json("Subscription successfully ")
    } catch (error) {
        next(error)
    }
}
const unsubscribe = async (req, res, next) => {

    try {
        await User.findByIdAndUpdate(req.user.id, { $pull: { subscribedUsers: req.params.id } })
        await User.findByIdAndUpdate(req.params.id, { $inc: { subscribersNumber: -1 } })
        res.status(200).json("Unsubscription successfully ")
    } catch (error) {
        next(error)
    }
}
const like = async (req, res, next) => {

}
const dislike = async (req, res, next) => {

}

module.exports = { updateUser, deleteUser, getUser, subscribe, unsubscribe, like, dislike }