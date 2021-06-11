let express = require('express');
let router = express.Router();
let profileController = require('../controllers/profileController');


/* GET productos listing listing. */
router.get('/id/:id', profileController.index);
router.get('/edit', profileController.show);
router.get('/edit/id/:id', profileController.edit);
router.post('/edit/id/:id',profileController.update);
router.get('/delete/id/:id', profileController.delete)
router.post('/delete/id/:id', profileController.destroy)



module.exports = router;


