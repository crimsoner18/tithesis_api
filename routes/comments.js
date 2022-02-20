var express = require('express');
const { 
    getComments, 
    addComment, 
    updateComment, 
    deleteComment 
} = require("../controllers/comments");
var router = express.Router();

router.get("/", getComments);
router.Comment("/", addComment);
router.patch("/:id", updateComment);
router.delete("/:id", deleteComment);

module.exports = router;