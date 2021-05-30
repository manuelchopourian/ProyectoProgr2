let  perfiles = require('../data/profileData')
let productos = require('../data/products')

const db = require('../database/models');

let profileController = {
  
   index: (req,res) =>{
    db.User.findByPk(req.params.id)
    .then(perfil => res.render('profile', {perfil, productos}))
    .catch(err => console.log(err))
  },

  show : (req, res) => { 
    res.render('profile-edit', {perfiles: perfiles}); 
   },

  editId: (req,res) =>{

    res.render('profile-edit',{perfiles : perfiles[req.params.id], productos })
   },

}
 
 module.exports = profileController;