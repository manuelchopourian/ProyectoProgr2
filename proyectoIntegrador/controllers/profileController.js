let  perfiles = require('../data/profileData')
let productos = require('../data/products')

let profileController = {

  index : (req, res) => { 
    res.render('profile', {perfiles: perfiles }); 
   },
  
  
   porId: (req,res) =>{

    res.render('profile',{perfiles : perfiles[req.params.id], productos })

  },

  show : (req, res) => { 
    res.render('profile-edit', {perfiles: perfiles}); 
   },

  editId: (req,res) =>{

    res.render('profile-edit',{perfiles : perfiles[req.params.id], productos })
   },

}
 
 module.exports = profileController;