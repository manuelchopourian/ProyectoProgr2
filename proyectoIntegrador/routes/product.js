let express = require('express');
let router = express.Router();
let productController = require('../controllers/productController');

let multer = require('multer')
let path = require('path')

var storage = multer.diskStorage({
    destination: function (req,file,cb) {
        
    cb(null, 'public/images/products');
},
filename: function (req,file,cb)  {

    cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))

}
});
var upload = multer({storage : storage})

router.get('/id/:id', productController.porId)
router.post('/id/:id', productController.comentar)
router.get('/add', productController.add)
router.post('/add', upload.single('url_imagen_producto'),productController.store)
router.get('/edit/:id',productController.edit)
router.post('/edit/:id',upload.single('url_imagen_producto'), productController.update)
router.get('/delete/:id', productController.delete)
router.post('/delete/:id', productController.destroy)
router.get('/coment/delete/:id', productController.actualizar)
router.post('/coment/delete/:id', productController.eliminar)
router.get('/all-products', productController.todos)



module.exports = router;
