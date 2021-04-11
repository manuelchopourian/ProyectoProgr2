let express = require('express');
let router = express.Router();
let registerController = require('../controllers/registerController');


/* GET productos listing listing. */
router.get('/', registerController.index)

module.exports = router;
