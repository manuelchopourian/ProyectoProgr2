let express = require('express');
let router = express.Router();
let profileEditController = require('../controllers/profile-editController');


/* GET productos listing listing. */
router.get('/', profileEditController.index);

router.get('/id/:id', profileEditController.porId);

module.exports = router;
