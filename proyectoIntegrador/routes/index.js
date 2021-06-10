let express = require('express');
let router = express.Router();
let indexController = require('../controllers/indexController');


/* GET productos listing listing. */
router.get('/', indexController.index)
router.get('/search-results', indexController.search)
router.get('/login', indexController.login)
router.post('/login', indexController.session)
router.post('/logout', indexController.logout);
router.get('/register', indexController.register)
router.post('/register', indexController.store)

module.exports = router;
