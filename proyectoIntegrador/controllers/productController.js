let  productos = require("../data/products")
let  perfiles = require('../data/profileData')

let productController = {

  index : (req, res) => { 
  res.render('product', {productos : productos},); 
  },
  
  porId: (req,res) =>{
    res.render('product',{producto : productos[req.params.id], perfiles  });
    },

    
  show : (req, res) => { 
    res.render('product-add', {perfiles: perfiles}); 
    },
    
  addId: (req,res) =>{
    res.render('product-add',{perfiles : perfiles[req.params.id], productos })
    },
     
     
       }
    
 module.exports = productController;


 