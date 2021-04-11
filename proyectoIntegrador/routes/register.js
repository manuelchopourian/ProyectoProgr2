let express = require('express');
let router = express.Router();
let registercontrollers = require('../controllers/registerController');


/* GET productos listing listing. */
router.get('/', registercontrollers.index)

module.exports = router;
