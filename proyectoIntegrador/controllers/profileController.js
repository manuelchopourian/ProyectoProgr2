const db = require('../database/models');
const op = db.Sequelize.Op;

const bcrypt = require('bcryptjs');

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
        db.Follow.findAll({
          where: {
            user_id: req.params.id
            }
        })
        .then((following)=>
        db.Follow.findAll({
          where: {
            following_id: req.params.id
            }
        })
      .then((follow)=> {
      if(req.session.user != undefined){
        db.Follow.findAll({
        where: {
        user_id: req.session.user.id,
        following_id: req.params.id
        }
        })
        .then((filtro)=>
         res.render('profile',{perfil,favoritos, filtro, follow, following})   
      )}
       else{
        res.render('profile',{perfil,favoritos, follow, following})  
       }
    })
    ))})
      .catch(err => {
        console.log(err)
        res.render('error',{error: err})
    })
  
},
  follow:(req,res) =>{
    db.Follow.findAll({
      where: {
      user_id: req.session.user.id,
      following_id: req.params.id
      }
    })
    .then((filtro)=> {
    if(filtro.length == 0){
      let followers = {
        user_id: req.session.user.id,
        following_id: req.params.id
        }
      db.Follow.create(followers)
      .then(()=> res.redirect('/profile/id/' + req.params.id))
      .catch(err => console.log(err))
    }
    else{
      db.Follow.destroy({
        where:{ 
          user_id: req.session.user.id,
          following_id: req.params.id
        }
      })
      .then(()=> res.redirect('/profile/id/' + req.params.id))
      .catch(err => console.log(err))
    }
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
          user_id:req.params.id,
    }
    })
      .then(()=>
    db.Favorite.destroy({
      where:{
        user_id:req.params.id,
     
    }}) 
    .then(()=> 
    db.Follow.destroy({
      where:{
        [op.or]:{ 
          user_id: req.params.id,
          following_id:req.params.id, 
        },
      }
    })
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
    ))))
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
      .then((favoritos)=> { return res.render('favorite', {favoritos})
    })
     
   }
  else {
      return res.redirect('/')
  }   
    
  },
  addFav:(req,res) =>{
    db.Product.findByPk(req.params.id)
    .then((productos)=>{
  if(req.session.user != undefined && productos.user_id != req.session.user.id){
    db.Favorite.findAll({
      where: {
        product_id: req.params.id,
        user_id: req.session.user.id
      },
    })
    .then((filtro)=>
      res.render('favorite-add',{filtro, productos})
    )
    }
    else{
      res.redirect('/')
    }})
},
  crear:(req,res) =>{
    db.Favorite.findAll({
      where: {
        product_id: req.params.id,
        user_id: req.session.user.id
      },
    })
    .then((filtro)=> {
    if(filtro.length == 0){
    let favorito = {
      user_id: req.session.user.id,
      product_id: req.params.id
    }
    db.Favorite.create(favorito)
        .then(()=> res.redirect('/profile/favorites'))
        .catch(err => console.log(err))
    }
    else{
      db.Favorite.destroy({
        where:{ 
          product_id:req.params.id,
          user_id: req.session.user.id
      }})
      .then(()=> res.redirect('/profile/favorites'))
      .catch(err => console.log(err))
    }
    })
  },
  seguidos:(req,res) => {
    if(req.session.user != undefined){
    db.Follow.findAll({
      where:{
        user_id: req.params.id
      },
      include: {association: 'following'}
    })
      .then((follow)=>{ 
        db.User.findOne({
          where:{
            id: req.params.id
          },
        })
        .then((usuario)=> {
        return res.render('following', {follow, usuario})
        })
    }) 
   }
    else {
      return res.redirect('/')
    }  
  },
  seguidores:(req,res) => {
    if(req.session.user != undefined){
    db.Follow.findAll({
      where:{
        following_id: req.params.id
      },
      include: {association: 'users'}
    })
      .then((follow)=> { 
        db.User.findOne({
          where:{
            id: req.params.id
          },
        })
        .then((usuario)=> {
        return res.render('followers', {follow, usuario})
        })
        
    })
     
   }
  else {
      return res.redirect('/')
  }  
    
  },
  password:(req,res) => { 
    if(req.session.user != undefined && req.params.id == req.session.user.id){
      return res.render('password-edit')
  } else {
      return res.redirect('/')
  }
},
  newPassword:(req,res) => {

    let errors = {};

    if(req.body.expassword == ""){ 
      errors.register = "Contraseña Actual no puede estar vacio"
      res.locals.errors = errors

      return res.render('password-edit')
 } 
  else if(req.body.password == ""){
    errors.register = "Nueva Contraseña no puede estar vacio"
    res.locals.errors = errors

    return res.render('password-edit')
} 
  else if(req.body.repassword == ""){ // La confirmacion de contraseña no este vacio
    errors.register = "Confirmar Contraseña no puede estar vacio"
    res.locals.errors = errors

    return res.render('password-edit')
  }
  else if(req.body.password != req.body.repassword ) { // El password y repassword no son iguales
    errors.register = "La confirmacion de contraseñas no coinciden"
    res.locals.errors = errors

    return res.render('password-edit')
} 
  else if (req.body.password.length < 3){ // El password tiene que tener 3 caracteres o más
    errors.register = "La nueva contraseña debe tener al menos 3 caracteres"
    res.locals.errors = errors

    return res.render('password-edit')
  } 

  else {
    db.User.findOne({
      where: [{ id: req.session.user.id}],
     })
     .then((user)=> {
     if(bcrypt.compareSync(req.body.expassword, user.password) == false){
      errors.register = "Contraseña Actual incorrecta";
      res.locals.errors = errors;
      return res.render('password-edit') 
     }
     else{
      let usuarios = {
        password: bcrypt.hashSync(req.body.password, 11),
        }
          db.User.update(usuarios, {
            where:{
              id:req.session.user.id
      
            }
          })
          .then(()=> res.redirect('/profile/id/' + req.session.user.id))
          .catch(err => console.log(err))
     }
      })
    }
  }
}
 
 module.exports = profileController;