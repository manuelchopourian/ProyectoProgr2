const db = require('../database/models');

let profileController = {
  
   index: (req,res) =>{
     let primaryKey = req.params.id;
    db.User.findByPk(primaryKey, {
    include: [{association: 'products'}, {association: 'coments'}, {association: 'favorites'}],
    })
    .then(perfil => {
      db.Favorite.findAll({
        where:{
          user_id:req.params.id
        },
        include: {association: 'products'}
      })
      .then((favoritos)=>
      res.render('profile',{perfil,favoritos})   
      )})
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
    .then((perfil)=> {
      if(req.session.user != undefined && perfil.id == req.session.user.id ){
        res.render('profile-edit',{perfil})
      }
      else{
        res.redirect('/')
      }
    })
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
    .then((perfil)=> {
      if(req.session.user != undefined && perfil.id == req.session.user.id ){
      res.render('profile-delete',{perfil})
      }
      else{
        res.redirect('/')
      }
    })
    .catch(err => console.log(err))
  },

  destroy:(req,res) =>{
    req.session.destroy();
    res.clearCookie('userID')
    res.redirect('/')
    db.Coment.destroy({
      where:{
        user_id:req.params.id
      }
    })
    .then(()=>
    db.Favorite.destroy({where:{
      user_id:req.params.id
    }}) 
    .then(()=> 
    db.Product.destroy({
      where:{
        user_id:req.params.id
      }
    })
    .then(() =>  
    db.User.destroy({
      where:{
        id:req.params.id
      }
    })
    .then(()=> res.redirect('/'))
    )))
    .catch(err => console.log(err))
},
  favoritos:(req,res) => {
    if(req.session.user != undefined){
    db.Favorite.findAll({
      where:{
        user_id: req.session.user.id
      },
      include: {association: 'products'}
    })
    .then((favoritos)=> {
     return res.render('favorite', {favoritos})
   })}
  else {
      return res.redirect('/')
  }   
    
  },
  addFav:(req,res) =>{
  if(req.session.user != undefined ){
      res.render('favorite-add')
    }
    else{
      res.redirect('/')
    }
},
  crear:(req,res) =>{
    let favorito = {
      user_id: req.session.user.id,
      product_id: req.params.id
    }
    db.Favorite.create(favorito)
        .then(()=> res.redirect('/profile/favorites'))
        .catch(err => console.log(err))
  }


}
 
 module.exports = profileController;