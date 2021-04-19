let express = require('express');
let router = express.Router();
let indexController = require('../controllers/indexController');


/* GET productos listing listing. */
router.get('/', indexController.index)

module.exports = router;
