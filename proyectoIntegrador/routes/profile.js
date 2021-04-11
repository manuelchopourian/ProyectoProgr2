let express = require('express');
let router = express.Router();
let profileController = require('../controllers/profileController');


/* GET productos listing listing. */
router.get('/', profileController.index)

module.exports = router;
