let express = require('express');
let router = express.Router();
let indexController = require('../controllers/indexController');


/* GET productos listing listing. */
router.get('/', indexController.index)
router.get('/search-results', indexController.search)
router.get('/login', indexController.login)
router.get('/register', indexController.register)

module.exports = router;
