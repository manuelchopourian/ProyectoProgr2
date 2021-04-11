let express = require('express');
let router = express.Router();
let profilecontrollers = require('../controllers/profileController');


/* GET productos listing listing. */
router.get('/', profilecontrollers.index)

module.exports = router;
