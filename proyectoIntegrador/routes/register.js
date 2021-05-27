let express = require('express');
let router = express.Router();
let registerController = require('../controllers/profileController');


/* GET productos listing listing. */
router.get('/', registerController.register)

module.exports = router;
