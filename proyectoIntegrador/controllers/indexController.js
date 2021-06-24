let db = require('../database/models');
const op = db.Sequelize.Op;
let users = db.User

const bcrypt = require('bcryptjs')


let indexController = {
    index : (req, res) => { 
      db.Product.findAll({
        order:[
          ['fecha_publicacion','DESC'],
        ],
        limit:4,
        include: [{association: 'user'}, {association: 'coments'}]
      })
        .then(productos => {
          db.Product.findAll({
            include: [{association: 'user'},{association: 'coments'}],
            order:[
              ['comentarios','DESC'],
            ],
            limit:4,
            
          })
            .then(coment => {   
              res.render('index',{productos,coment})    
            })
          
        })
        .catch(err => {
            console.log(err)
            res.render('error',{error: err})
        })
        
      },
      

  search: (req, res)=>{
    db.Product.findAll({
        order:[
          ['comentarios','DESC'],
        ], include: [{association: 'user'}],
        where: {
          [op.or]:{ 
            nombre: {[op.like]: `%${req.query.search}%`},
            descripcion: {[op.like]: `%${req.query.search}%`},
            categoria: {[op.like]: `%${req.query.search}%`},
            marca: {[op.like]: `%${req.query.search}%`},
            
          },
        },
        

    })
        .then(productos => {

  
          if(productos.length != 0){
            res.render('search-results', {title:'Resultados de busqueda', productos })
          }
          else{
          res.render('search-results', {title: 'No hay resultados para su criterio de búsqueda', productos})
          }

        })

        .catch(err=> console.log(err));
  },
  login : (req, res) => { 
    if(req.session.user != undefined){
      return res.redirect('/')
  } else {
      return res.render('login')
  }
  },

  session : (req, res) => { 
// Errores
    let errors = {};
// usuario por email
users.findOne({
  where: [{email: req.body.email}]
})
// validar
.then( (user) => {
  if(user == null){
     errors.session = "Email incorrecto";
     res.locals.errors = errors;
     return res.render('login') 
  } else if (bcrypt.compareSync(req.body.password, user.password) == false){
      errors.session = "Contraseña incorrecta";
      res.locals.errors = errors;
     return res.render('login') 
  } else {
      req.session.user = user;
      
      if(req.body.remember){
        res.cookie('userID', users.id, {maxAge: 1000 * 60 * 30});
    }
}
return res.redirect('/');
})
.catch( err => console.log(err))
},

logout: (req, res)=>{
  req.session.destroy();
  res.clearCookie('userID')
  res.redirect('/')
},
  


  register : (req, res) => { 
    if(req.session.user != undefined){
      return res.redirect('/')
  } else {
      return res.render('register')
  }
},

  store: (req, res) => {
    let errors = {};
        //chequear los campos obligatorios
        
       if(req.body.email == ""){ // El mail no debe esta vacio
            errors.register = "Email no puede estar vacio"
            res.locals.errors = errors

            return res.render('register')

       } else if (req.body.password == ""){ // El password no este vacio
            errors.register = "Contraseña no puede estar vacio"
            res.locals.errors = errors

            return res.render('register')
       } 
       else if (req.body.password.length <= 3){ // El password tiene que tener 3 caracteres o más
        errors.register = "La Contraseña debe tener al menos 3 caracteres"
        res.locals.errors = errors

        return res.render('register')
      } 
      else if (req.body.nombre == ""){ // El nombre no este vacio
        errors.register = "Nombre no puede estar vacio"
        res.locals.errors = errors

        return res.render('register')
      }
       else if (req.body.nombre_usuario == ""){ // El nombre de usuario no este vacio
        errors.register = "Nombre de Usuario no puede estar vacio"
        res.locals.errors = errors

        return res.render('register')
       }
       else if(req.body.repassword == ""){ // La confirmacion de contraseña no este vacio
            errors.register = "Confirmar Contraseña no puede estar vacio"
            res.locals.errors = errors

            return res.render('register')
       } else {
           users.findOne({
             where: [{ email : req.body.email}],
            })
            .then( usuario => {
              users.findOne({
                where: [{ nombre_usuario : req.body.nombre_usuario}],
               })
               .then(user =>{
                if(usuario != null){ // El email ya existe
                  errors.register = "Email ya existente"
                  res.locals.errors = errors

                  return res.render('register')
              } 
              else if(user != null) { // El nombre de usuario ya existe
                errors.register = "Nombre de Usuario ya existente"
                res.locals.errors = errors

                return res.render('register')
            } 
              else if(req.body.password != req.body.repassword ) { // El password y repassword no son iguales
                  errors.register = "Las contraseñas no coinciden"
                  res.locals.errors = errors

                  return res.render('register')
              } 
              else {
        let usuarios = {
          nombre: req.body.nombre,
          apellido: req.body.apellido,
          nombre_usuario: req.body.nombre_usuario,
          telefono: req.body.telefono,
          email: req.body.email,
          fecha_nacimiento: req.body.fecha_nacimiento,
          password: bcrypt.hashSync(req.body.password, 11),
          url_imagen_usuario: req.file.filename
          }
            db.User.create(usuarios)
            .then(()=> res.redirect('/login'))
            .catch(err => console.log(err))
      }
               })
                
      
      })  
      .catch(err => console.log(err))
    }
   }
  }
 
 module.exports = indexController;

 

 
