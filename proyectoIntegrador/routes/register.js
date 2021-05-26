let express = require('express');
let router = express.Router();
let registerController = require('../controllers/indexController');


/* GET productos listing listing. */
router.get('/', registerController.register)

module.exports = router;
