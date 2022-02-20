var express = require('express');
const { 
    getPosts, 
    addPost, 
    updatePost, 
    deletePost 
} = require("../controllers/posts");
var router = express.Router();

router.get("/", getPosts);
router.post("/", addPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports = router;