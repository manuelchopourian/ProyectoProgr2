let  productos = require("/data/products")
let  perfiles = require('/data/profileData')

const db = require('../database/models');

let productController = {

  index : (req, res) => { 
  res.render('product', {producto : producto},); 
  },

  porId: (req, res)=>{
    db.Product.findByPk(req.params.id)
        .then(producto => res.render('product', {producto, perfiles}))
        .catch( err => console.log(err))
  },

    
  show : (req, res) => { 
    res.render('product-add', {perfiles: perfiles}); 
    },
    
  addId: (req,res) =>{
    res.render('product-add',{perfiles : perfiles[req.params.id], productos })
    },
     
     
}
    
 module.exports = productController;


 