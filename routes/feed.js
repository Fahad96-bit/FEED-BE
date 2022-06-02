const express = require("express");
const router = express.Router();
const feedControllter = require("../controllers/feed");
const { body } = require("express-validator/check");
const isAuth = require("../middleware/is-auth");

router.get("/posts", isAuth, feedControllter.getPosts);
router.post(
  "/post",
  isAuth,
  [
    body("title").trim().isLength({ min: 5 }),
    body("content").trim().isLength({ min: 5 }),
  ],
  feedControllter.createPost
);
router.get("/post/:postId", isAuth, feedControllter.getPost);
router.put(
  "/post/:postId",
  isAuth,
  [
    body("title").trim().isLength({ min: 5 }),
    body("content").trim().isLength({ min: 5 }),
  ],
  feedControllter.updatePost
);
router.delete("/post/:postId", isAuth, feedControllter.deletePost);
router.get("/status", isAuth, feedControllter.status);
router.put(
  "/status",
  isAuth,
  [body("status").trim().not().isEmpty()],
  feedControllter.updateStatus
);

module.exports = router;
