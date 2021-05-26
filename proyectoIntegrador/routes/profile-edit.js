let express = require('express');
let router = express.Router();
let profileEditController = require('../controllers/profileController');


/* GET productos listing listing. */
router.get('/', profileEditController.show);

router.get('/id/:id', profileEditController.editId);

module.exports = router;
