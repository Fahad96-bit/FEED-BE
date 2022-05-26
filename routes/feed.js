const express = require("express");
const router = express.Router();
const feedControllter = require("../controllers/feed");
router.get("/posts", feedControllter.getPosts);
router.post("/post", feedControllter.createPost);
module.exports = router;
