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
router.get('/edit', profileController.show);
router.get('/edit/id/:id', profileController.edit);
router.post('/edit/id/:id', upload.single('url_imagen_usuario'),profileController.update);
router.get('/delete/id/:id', profileController.delete)
router.post('/delete/id/:id', profileController.destroy)



module.exports = router;


/*<div class="col-12">
				<% if(locals.user.id == producto.user_id)){ %>
                    <h2 class="products-title">¿Esta seguro qué desea eliminar su perfil?</h2>
                    </div>
                    <div class="respuesta">
                    <form action="/profile/delete/id/<%= perfil.id %>" style="display: inline;" method="GET">
                        <button type="submit" class="">Si</button>
                    </form>
                    <a href="/profile/id/<%= perfil.id %>">No</a>
                    <% } else{ %> 
                        <h2 class="products-title">Este perfil no te pertenece</h2>
                        <% } %> 
                    </div>*/