
let  perfiles = require('../data/profileData')

const db = require('../database/models');

let productController = {


  porId: (req, res)=>{
    db.Product.findByPk(req.params.id)
        .then(producto => res.render('product', {producto, perfiles}))
        .catch(err => console.log(err))
  },

    
  add : (req, res) => { 
    res.render('product-add', {perfiles: perfiles}); 
    },
  
  store: (req,res) => {
    let productos = {
    nombre: req.body.nombre,
    url_imagen_producto: req.body.url_imagen_producto,
    marca: req.body.marca,
    descripcion: req.body.descripcion,
  }
  db.Product.create(productos)
    .then(()=> res.redirect('/'))
    .catch(err => console.log(err))
  },
     
     
}
    
 module.exports = productController;


 