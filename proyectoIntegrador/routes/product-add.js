let express = require('express');
let router = express.Router();
let productAddController = require('../controllers/product-addController');


/* GET productos listing listing. */
router.get('/', productAddController.index)

router.get('/id/:id', productAddController.porId);

module.exports = router;
