let express = require('express');
let router = express.Router();
let indexController = require('../controllers/indexController');
let multer = require('multer')
let path = require('path')

var storage = multer.diskStorage({
    destination: function (req,file,cb) {
        
    cb(null, 'public/images/profiles');
},
filename: function (req,file,cb)  {

    cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))

}
});
var upload = multer({storage : storage})



/* GET productos listing listing. */
router.get('/', indexController.index)
router.get('/search-results', indexController.search)
router.get('/login', indexController.login)
router.post('/login', indexController.session)
router.post('/logout', indexController.logout);
router.get('/register', indexController.register)
router.post('/register', upload.single('url_imagen_usuario'), indexController.store)

module.exports = router;
