let  perfiles = require('../data/profileData')
let productos = require('../data/products')

let profileEditController = {

    index : (req, res) => { 
     res.render('profile-edit', {perfiles: perfiles}); 
    },

     porId: (req,res) =>{

      res.render('profile-edit',{perfiles : perfiles[req.params.id], productos })
  
    },
 
 
   }
 
 module.exports = profileEditController;