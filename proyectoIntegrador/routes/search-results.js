let express = require('express');
let router = express.Router();
let searchresultscontrollers = require('../controllers/search-resultsController');


/* GET productos listing listing. */
router.get('/', searchresultscontrollers.index)

module.exports = router;
