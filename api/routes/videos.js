const express = require('express')
const { verifyToken } = require('../verifyToken')
import { addVideo, addView, deleteVideo, getByTagVideo, getVideo, randomVideo, searchVideo, subVideo, trendingVideo, updateVideo } from "../controllers/video.js"

const router = express.Router()

router.post("/", verifyToken, addVideo)
router.put("/:id", verifyToken, updateVideo)
router.delete("/:id", verifyToken, deleteVideo)
router.get("/find/:id", getVideo)
router.put("/view/:id", addView)
router.get("/trend/:id", trendingVideo)
router.get("/random", randomVideo)
router.get("/sub",verifyToken, subVideo)
router.get("/tags",verifyToken, getByTagVideo)
router.get("/search",verifyToken, searchVideo)


module.exports = router