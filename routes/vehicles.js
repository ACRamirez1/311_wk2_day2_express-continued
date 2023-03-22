let express = require('express')
let router = express.Router();

let vehiclesController = require('../controllers/vehicles')

router.get('/vehicles', vehiclesController.getList)
router.get('/vehicles/:id', vehiclesController.getVehiclesById) 
router.post('/vehicles', vehiclesController.postVehicles)



module.exports = router;