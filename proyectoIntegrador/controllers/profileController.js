let productos = require('../data/products')

const db = require('../database/models');

let profileController = {
  
   index: (req,res) =>{
    db.User.findByPk(req.params.id)
    .then(perfil => res.render('profile', {perfil, productos}))
    .catch(err => console.log(err))
  },

  show : (req, res) => { 
    res.render('profile-edit'); 
   },

   edit:(req,res) =>{
    db.User.findByPk(req.params.id)
    .then((perfil)=> res.render('profile-edit',{perfil}))
    .catch(err => console.log(err))
  },
  update:(req,res) =>{
    let perfilActualizado = req.body
    db.User.update(
      perfilActualizado, 
      {
      where:{
        id:req.params.id

      }
    })
    .then(()=> 
    res.redirect('/'))
    .catch(err => console.log(err))
  },
  delete:(req,res) =>{
    db.User.findByPk(req.params.id)
    .then((perfil)=> res.render('profile-delete',{perfil}))
    .catch(err => console.log(err))
  },

  destroy:(req,res) =>{
    req.session.destroy();
    res.clearCookie('userID')
    res.redirect('/')
    db.User.destroy({
      where:{
        id:req.params.id
      }
    })
    .then(()=> res.redirect('/'))
    .catch(err => console.log(err))
  },

}
 
 module.exports = profileController;