var express = require("express");
const {
  getComments,
  addComment,
  updateComment,
  deleteComment,
} = require("../controllers/comments");
var router = express.Router();

router.get("/:post", getComments);
router.post("/", addComment);
router.patch("/:id", updateComment);
router.delete("/:id", deleteComment);

module.exports = router;
