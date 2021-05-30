let express = require('express');
let router = express.Router();
let productController = require('../controllers/productController');

router.get('/id/:id', productController.porId)
router.post('/id/:id', productController.destroy)
router.get('/add', productController.add)
router.post('/add', productController.store)
router.get('/edit/:id',productController.edit)
router.post('/edit/:id',productController.update)




module.exports = router;
