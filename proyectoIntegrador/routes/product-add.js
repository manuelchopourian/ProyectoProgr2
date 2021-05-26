let express = require('express');
let router = express.Router();
let productAddController = require('../controllers/productController');


/* GET productos listing listing. */
router.get('/', productAddController.show)

router.get('/id/:id', productAddController.addId);

module.exports = router;
