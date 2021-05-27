let express = require('express');
let router = express.Router();
let profileController = require('../controllers/profileController');


/* GET productos listing listing. */
router.get('/', profileController.index)
router.get('/id/:id', profileController.porId);
router.get('/edit', profileController.show);
router.get('/edit/id/:id', profileController.editId);



module.exports = router;
