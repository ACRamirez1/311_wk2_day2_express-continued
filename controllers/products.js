const products = require('../data/products')

const getList = (req, res) => {
    res.json(products)
}

const getProductsById = (req,res) => {

    let myId = req.params.id;

    let matchingItem = products.find((item) => {
    return item._id == myId})

    if (matchingItem) {
        res.json(matchingItem);
    } else {
        res.send("No ID found")
    }
}

const postProducts = (req, res) => {
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



module.exports = {getList, getProductsById, postProducts}