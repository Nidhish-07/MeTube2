const express = require('express')
const video = require("../controllers/video")

const router = express.Router()

router.get("/", video)


module.exports = router