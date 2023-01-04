import createError from "../error.js"
import Video from "../models/Video.js"
import User from "../models/User.js"

export const addVideo = (req, res, next) => {
    const newVideo = new Video({ userId: req.user.id, ...req.body })
    try {
        const savedVideo = newVideo.save()
        res.status(200).json(savedVideo)
    } catch (error) {
        next(error)
    }
}

export const updateVideo = async (req, res, next) => {
    try {

        const video = await Video.findById(req.params.id)
        if (!video) {
            return next(createError(404, "Video not found"))
        }

        if (req.user.id === video.userId) {
            const updatedVideo = await Video.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
            return res.status(200).json(updatedVideo)
        } else {
            return next(createError(403, "You cannot update this video"))
        }
    } catch (error) {
        next(error)
    }
}
export const deleteVideo = async (req, res, next) => {
    try {

        const video = await Video.findById(req.params.id)
        if (!video) {
            return next(createError(404, "Video not found"))
        }

        if (req.user.id === video.userId) {
            await Video.findByIdAndDelete(req.params.id)
            return res.status(200).json("Video deleted")
        } else {
            return next(createError(403, "You cannot delete this video"))
        }
    } catch (error) {
        next(error)
    }
}
export const getVideo = async (req, res, next) => {

    try {
        const video = await Video.findById(req.params.id)
        res.status(200).json(video)
    } catch (error) {
        next(error)
    }
}
export const addView = async (req, res, next) => {

    try {
        await Video.findByIdAndUpdate(req.params.id, { $inc: { views: 1 } })
        res.status(200).json("View increased")
    } catch (error) {
        next(error)
    }
}

export const randomVideo = async (req, res, next) => {

    try {
        const videos = await Video.aggregate([{ $sample: { size: 40 } }])
        res.status(200).json(videos)
    } catch (error) {
        next(error)
    }
}

export const trendingVideo = async (req, res, next) => {

    try {
        const videos = await Video.find().sort({ views: -1 })
        res.status(200).json(videos)
    } catch (error) {
        next(error)
    }
}

export const subVideo = async (req, res, next) => {

    try {
        const user = await User.findById(req.user.id)
        const subscribedChannels = user.subscribedUsers

        const usersList = await Promise.all(subscribedChannels.map(channelId => Video.find({ userId: channelId })))
        res.status(200).json(usersList.flat().sort((a, b) => b.createdAt - a.createdAt))
    } catch (error) {
        next(error)
    }
}


