let express = require('express');
let router = express.Router();
let profileController = require('../controllers/profileController');


/* GET productos listing listing. */
router.get('/id/:id', profileController.index);
router.get('/edit', profileController.show);
router.get('/edit/id/:id', profileController.editId);



module.exports = router;
