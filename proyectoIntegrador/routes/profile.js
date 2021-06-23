let express = require('express');
let router = express.Router();
let profileController = require('../controllers/profileController');

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
router.get('/id/:id', profileController.index);
router.post('/id/:id', profileController.follow);
router.get('/edit', profileController.show);
router.get('/edit/id/:id', profileController.edit);
router.post('/edit/id/:id', upload.single('url_imagen_usuario'),profileController.update);
router.get('/delete/id/:id', profileController.delete)
router.post('/delete/id/:id', profileController.destroy)
router.get('/favorites', profileController.favoritos);
router.get('/following/:id', profileController.seguidos);
router.get('/followers/:id', profileController.seguidores);
router.get('/favorites/add/:id', profileController.addFav);
router.post('/favorites/add/:id', profileController.crear);



module.exports = router;

