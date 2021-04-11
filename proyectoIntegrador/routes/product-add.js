let express = require('express');
let router = express.Router();
let productaddcontrollers = require('../controllers/product-addController');


/* GET productos listing listing. */
router.get('/', productaddcontrollers.index)

module.exports = router;
