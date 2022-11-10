const express = require('express')
const comment = require("../controllers/comment")

const router = express.Router()

router.get("/", comment)


module.exports = router