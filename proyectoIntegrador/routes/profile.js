let express = require('express');
let router = express.Router();
let profileController = require('../controllers/profileController');


/* GET productos listing listing. */
router.get('/id/:id', profileController.index);
router.get('/edit', profileController.show);
router.get('/edit/id/:id', profileController.edit);
router.post('/edit/id/:id',profileController.update);



module.exports = router;
