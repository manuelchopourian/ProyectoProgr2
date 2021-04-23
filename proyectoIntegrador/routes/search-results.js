let express = require('express');
let router = express.Router();
let searchResultsController = require('../controllers/search-resultsController');


/* GET productos listing listing. */
router.get('/', searchResultsController.search)

module.exports = router;
