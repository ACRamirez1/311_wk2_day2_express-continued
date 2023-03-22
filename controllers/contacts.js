const contacts = require('../data/contacts')

const list = (req, res) => {
    res.json(contacts)
}

const show = (req,res) => {

    let myId = req.params.id;

    let matchingItem = contacts.find((item) => {
    return item._id == myId})

    if (matchingItem) {
        res.json(matchingItem);
    } else {
        res.send("No ID found")
    }
}

const create = (req, res) => {
    //reference data file to find what "description" is
    //to create new info. 
    let newItem = {};
    newItem._id = contacts.length + 1;
    newItem.name = req.body.name;
    newItem.occupation = req.body.occupation;
    newItem.avatar = req.body.avatar
    newItem.postId = 1

    contacts.push(newItem);

    res.json(newItem)
}



module.exports = {list, show, create}