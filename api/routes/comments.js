const express = require('express')
import { addComment, deleteComment, getComment } from "../controllers/comment"
const { verifyToken } = require('../verifyToken')

const router = express.Router()

router.post("/", verifyToken, addComment)
router.delete("/:id", verifyToken, deleteComment)
router.get("/:videoId", verifyToken, getComment)


module.exports = router