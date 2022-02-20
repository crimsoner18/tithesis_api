const { commentModel } = require("../models/comments");

// retrieves all items from schema
const getComments = async (req, res) => {
    try {
        const comments = await commentModel.find();

        res.status(200).json(comments);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error.message });
    }
};

// adds an item to the schema
const addComment = async (req, res) => {
    const data = req.body;
    const newComment = new commentModel(data);

    try {
        await newComment.save();

        res.status(200).json(newComment);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error });
    }
};

// updates an item in the schema
const updateComment = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
  
    try {
        await commentModel.findByIdAndUpdate(id, data);
  
        res.status(200).json({message: "Item updated successfully"});
    } catch (error) {
        console.log(req.params);
        res.status(400).json({ message: error.message });
    }
}; 

// deletes an item from the schema
const deleteComment = async (req, res) => {
    const id = req.params.id;

    try {
        await commentModel.findByIdAndDelete(id);

        res.status(200).json({message: "Item deleted successfully"});
    } catch (error) {
        console.log(req.params);
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getComments,
    addComment,
    updateComment,
    deleteComment
};
