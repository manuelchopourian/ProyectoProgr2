let express = require('express');
let router = express.Router();
let loginController = require('../controllers/loginController');


/* GET productos listing listing. */
router.get('/', loginController.index)

module.exports = router;


