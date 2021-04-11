let express = require('express');
let router = express.Router();
let productcontrollers = require('../controllers/productController');


/* GET productos listing listing. */
router.get('/', productcontrollers.index)

module.exports = router;
