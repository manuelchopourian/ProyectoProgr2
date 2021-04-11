let express = require('express');
let router = express.Router();
let logincontrollers = require('../controllers/loginController');


/* GET productos listing listing. */
router.get('/', logincontrollers.index)

module.exports = router;


