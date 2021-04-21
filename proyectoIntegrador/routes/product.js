let express = require('express');
let router = express.Router();
let productController = require('../controllers/productController');


router.get('/', productController.index)
/* por id */

router.get('/id/:id', productController.porId);


module.exports = router;
