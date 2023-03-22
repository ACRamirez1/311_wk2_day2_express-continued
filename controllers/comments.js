const comments = require('../data/comments')

const getList = (req, res) => {
    res.json(comments)
}

const getCommentsById = (req,res) => {

    let myId = req.params.id;

    let matchingItem = comments.find((item) => {
    return item._id == myId})

    if (matchingItem) {
        res.json(matchingItem);
    } else {
        res.send("No ID found")
    }
}

const postComments = (req, res) => {
    //reference data file to find what "description" is
    //to create new info. 
    let newItem = {};
    newItem._id = comments.length + 1;
    newItem.body = req.body.body;
    newItem.postId = 1

    comments.push(newItem);

    res.json(newItem)
}



module.exports = {getList, getCommentsById, postComments}