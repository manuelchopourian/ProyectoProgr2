let express = require('express');
let router = express.Router();
let productAddController = require('../controllers/product-addController');


/* GET productos listing listing. */
router.get('/', productAddController.index)

module.exports = router;
