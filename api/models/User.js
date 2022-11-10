const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
    },
    subscribersNumber: {
        type: Number,
        default: 0,

    },
    subscribeUsers: {
        type: [String]
    }
}, { timestamp: true })


const User=mongoose.model("User",UserSchema)
module.exports=User