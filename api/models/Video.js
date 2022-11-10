const mongoose = require('mongoose')

const videoSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    title: {
        type: String, require: true
    },
    desc: {
        type: String, require: true
    },
    imageUrl: {
        type: String, require: true
    },
    videoUrl: {
        type: String, require: true
    },
    views: {
        type: Number, default: 0
    },
    tags: {
        type: [String], default: []
    },
    likes: {
        type: [String], default: []
    },
    dislikes: {
        type: [String], default: []
    },
}, { timestamp: true })


const Video = mongoose.model("Video", videoSchema)
module.exports = Video