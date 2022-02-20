const { postModel } = require("../models/posts");

// retrieves all items from schema
const getPosts = async (req, res) => {
    try {
        const posts = await postModel.find();

        res.status(200).json(posts);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error.message });
    }
};

// adds an item to the schema
const addPost = async (req, res) => {
    const data = req.body;
    const newPost = new postModel(data);

    try {
        await newPost.save();

        res.status(200).json(newPost);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error });
    }
};

// updates an item in the schema
const updatePost = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
  
    try {
        await postModel.findByIdAndUpdate(id, data);
  
        res.status(200).json({message: "Item updated successfully"});
    } catch (error) {
        console.log(req.params);
        res.status(400).json({ message: error.message });
    }
}; 

// deletes an item from the schema
const deletePost = async (req, res) => {
    const id = req.params.id;

    try {
        await postModel.findByIdAndDelete(id);

        res.status(200).json({message: "Item deleted successfully"});
    } catch (error) {
        console.log(req.params);
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getPosts,
    addPost,
    updatePost,
    deletePost
};
