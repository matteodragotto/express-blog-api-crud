const express = require('express');
const postsController = require('../controller/postsController')
const router = express.Router();
const dataValidation = require('../middlewares/dataValidation')

//index
router.get('/', postsController.index);

//show
router.get('/:id', postsController.show);

//store
router.post('/', dataValidation, postsController.store);

//update
router.put('/:id', dataValidation, postsController.update);

//modify
router.patch('/:id', postsController.modify);

//destroy
router.delete('/:id', postsController.destroy)

module.exports = router