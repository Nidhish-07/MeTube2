const express = require("express")
const mongoose = require("mongoose")
require('dotenv').config()
const UserRoute = require("./routes/users")
const CommentRoute = require("./routes/comments")
const VideoRoute = require("./routes/videos")
const AuthRoute = require("./routes/auth")
const cookieParser = require("cookie-parser")

const app = express()



const connect = async () => {
   mongoose.connect(process.env.MONGODB_URL).then(() => {
      console.log("Connected to DB");
   }).catch((err) => {
      throw err
   })

}

app.use(cookieParser())
app.use(express.json())
app.use("/api/auth", AuthRoute)
app.use("/api/users", UserRoute)
app.use("/api/videos", UserRoute)
app.use("/api/comments", UserRoute)

app.use((err, req, res, next) => {
   const status = err.status || 500
   const message = err.message || "Something went wrong"

   return res.status(status).send({ success: false, status, message })
})

app.listen(8080, () => {
   connect()
   console.log("Server is up and running");
})