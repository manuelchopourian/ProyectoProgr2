let express = require('express');
let router = express.Router();
let profileeditcontrollers = require('../controllers/profile-editController');


/* GET productos listing listing. */
router.get('/', profileeditcontrollers.index)

module.exports = router;
