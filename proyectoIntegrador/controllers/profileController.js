const db = require('../database/models');

let profileController = {
  
   index: (req,res) =>{
     let primaryKey = req.params.id;
    db.User.findByPk(primaryKey, {
    include: [{association: 'products'}],
    })
    .then(perfil => {
      db.User.findByPk(primaryKey, {
        include: [{association: 'coments'}]
      })
        .then(coment => {   
          res.render('profile',{perfil,coment})    
        })
      })
      .catch(err => {
        console.log(err)
        res.render('error',{error: err})
    })
  
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
    let usuario = {
      id: req.session.user.id,
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      nombre_usuario: req.body.nombre_usuario,
      telefono: req.body.telefono,
      email: req.body.email,
      url_imagen_usuario: req.file.filename
      }
    db.User.update(
      usuario, 
      {
      where:{
        id:req.params.id

      }
    })
    .then(()=> {
    req.session.user = usuario
    res.redirect('/')
    })
    
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