let express = require('express')
let router = express.Router();

let commentsController = require('../controllers/comments')

router.get('/comments', commentsController.getList)
router.get('/comments/:id', commentsController.getCommentsById) 
router.post('/comments', commentsController.postComments)



module.exports = router;