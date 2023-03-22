const products = require('../data/products')

const list = (req, res) => {
    res.json(products)
}

const show = (req,res) => {

    let myId = req.params.id;

    let matchingItem = products.find((item) => {
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
    newItem._id = products.length + 1;
    newItem.name = req.body.name;
    newItem.description = req.body.description;
    newItem.postId = 1

    products.push(newItem);

    res.json(newItem)
}



module.exports = {list, show, create}