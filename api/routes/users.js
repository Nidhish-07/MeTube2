const express = require('express')
const { updateUser, deleteUser, getUser, subscribe, unsubscribe, like, dislike } = require("../controllers/user")
const { verifyToken } = require('../verifyToken')

const router = express.Router()

router.put("/:id", verifyToken, updateUser)
router.delete("/:id", deleteUser)
router.put("/find/:id", getUser)
router.put("/sub/:id", subscribe)
router.put("/unsub/:id", unsubscribe)
router.put("/like/:videoId", like)
router.put("/dislike/:videoId", dislike)


module.exports = router