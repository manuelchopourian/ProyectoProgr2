let express = require('express');
let router = express.Router();
let productController = require('../controllers/productController');


router.get('/id/:id', productController.porId);
router.get('/add', productController.add)
router.post('/add', productController.store)


module.exports = router;
