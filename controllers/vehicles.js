const vehicles = require('../data/vehicles')

const getList = (req, res) => {
    res.json(vehicles)
}

const getVehiclesById = (req,res) => {

    let myId = req.params.id;

    let matchingItem = vehicles.find((item) => {
    return item._id == myId})

    if (matchingItem) {
        res.json(matchingItem);
    } else {
        res.send("No ID found")
    }
}

const postVehicles = (req, res) => {
    //reference data file to find what "description" is
    //to create new info. 
    let newItem = {};
    newItem._id = vehicles.length + 1;
    newItem.year = req.body.year;
    newItem.make = req.body.make;
    newItem.model = req.body.model;
    newItem.postId = 1

    vehicles.push(newItem);

    res.json(newItem)
}



module.exports = {getList, getVehiclesById, postVehicles}