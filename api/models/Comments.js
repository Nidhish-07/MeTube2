const mongoose=require('mongoose')

const commentSchema=mongoose.Schema({
    userId:{
        type:String,
        require:true
    },
    videoId:{
        type:String,
        require:true
    },
    desc:{
        type:String,
        require:true
    },
})

const Comment=mongoose.model("Comment",commentSchema)
module.exports=Comment