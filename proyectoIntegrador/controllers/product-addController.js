let  perfiles = require('../data/profileData')
let productos = require('../data/products')

let productAddController = {

    index : (req, res) => { 
     res.render('product-add', {perfiles: perfiles}); 
    },

     porId: (req,res) =>{

      res.render('prduct-add',{perfiles : perfiles[req.params.id], productos })
  
    },
 
 
   }

 
 module.exports = productAddController;