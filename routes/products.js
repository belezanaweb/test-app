const router = require('express').Router()

const productsController = require('../controllers/productsController')

router.get('/', productsController.list)
router.get('/:sku', productsController.bySku)

module.exports = router;
