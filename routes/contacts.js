let express = require('express')
let router = express.Router();

let contactsController = require('../controllers/contacts')

router.get('/contacts', contactsController.getList)
router.get('/contacts/:id', contactsController.getContactsById) 
router.post('/contacts', contactsController.postContacts)



module.exports = router;