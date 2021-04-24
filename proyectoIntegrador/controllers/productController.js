let  productos = require("../data/products")
let  perfiles = require('../data/profileData')

let productController = {

  index : (req, res) => { 
  res.render('product', {productos : productos},); 
  },
  
  
   porId: (req,res) =>{

    res.render('product',{producto : productos[req.params.id], perfiles  });
    },

 


  }
  
  
  

  
  
 
   
 
 module.exports = productController;


 