let  perfiles = require('../data/profileData')
const db = require('../database/models');

let productController = {


  porId: (req, res)=>{
    let primaryKey = req.params.id;
    db.Product.findByPk(primaryKey, {
      include: [{association: 'user'}]
    })
        .then(producto => res.render('product', {producto, perfiles}))
        .catch(err => console.log(err));
  },

    
  add : (req, res) => { 
    res.render('product-add'); 
    },
  
  store: (req,res) => {
    let errors = {};
        //chequear los campos obligatorios
        
       if(req.body.nombre == ""){ // El Nombre no debe esta vacio
            errors.productAdd = "Nombre no puede estar vacio"
            res.locals.errors = errors

            return res.render('product-add')

       } 
       else if(req.body.descripcion == ""){ // La descripcion no debe estar vacia
          errors.productAdd = "Descripcion no puede estar vacio"
          res.locals.errors = errors

          return res.render('product-add')

       }
       else{
        let productos = {
        nombre: req.body.nombre,
        url_imagen_producto: req.file.filename,
        marca: req.body.marca,
        descripcion: req.body.descripcion,
        user_id: req.session.user.id

        }
          db.Product.create(productos)
          .then(()=> res.redirect('/'))
          .catch(err => console.log(err))
      }
    },
  destroy:(req,res) =>{
    db.Product.destroy({
      where:{
        id:req.params.id
      }
    })
    .then(()=> res.redirect('/'))
    .catch(err => console.log(err))
  },
  
  edit:(req,res) =>{
    db.Product.findByPk(req.params.id)
    .then((productos)=> res.render('product-edit',{productos}))
    .catch(err => console.log(err))
  },
  update:(req,res) =>{
    let producto = {
      nombre: req.body.nombre,
      marca: req.body.marca,
      descripcion: req.body.descripcion,
      user_id: req.session.user.id,
      url_imagen_producto: req.file.filename
      }
    db.Product.update(
      producto, 
      {
      where:{
        id:req.params.id

      }
    })
    .then(()=> res.redirect('/'))
    .catch(err => console.log(err))
  },
  
}
    
 module.exports = productController;


 