let express = require('express');
let router = express.Router();
let loginController = require('../controllers/profileController');


/* GET productos listing listing. */
router.get('/', loginController.login)

module.exports = router;


