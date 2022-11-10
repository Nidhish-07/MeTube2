const express = require('express')
const { singUp, singIn } = require("../controllers/auth")


const router = express.Router()

router.post("/signup", singUp)

router.post("/signin", singIn)

router.post("/google",)

module.exports = router