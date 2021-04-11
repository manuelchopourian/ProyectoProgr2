let express = require('express');
let router = express.Router();
let productController = require('../controllers/productController');


/* GET productos listing listing. */
router.get('/', productController.index)

module.exports = router;
