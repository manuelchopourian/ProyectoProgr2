let db = require('../database/models');
const op = db.Sequelize.Op;

const bcrypt = require('bcryptjs')


let indexController = {
    index : (req, res) => { 
      db.Product.findAll({
        order:[
          ['fecha_publicacion','DESC'],
        ],
        limit:4
      })
        .then(productos => {
          db.Product.findAll({
            order:[
              ['comentarios','DESC'],
            ],
            limit:4
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
        ],
        where: {
          [op.or]:{ 
            nombre: {[op.like]: `%${req.query.search}%`},
            descripcion: {[op.like]: `%${req.query.search}%`},
            categoria: {[op.like]: `%${req.query.search}%`},
            marca: {[op.like]: `%${req.query.search}%`},
          },
          
        }
    })
        .then(productos => {
          if(productos.length != 0){
            res.render('search-results', {title:'Resultados de busqueda', productos })
          }
          else{
          res.render('search-results', {title: 'No hay resultados para su criterio de búsqueda', productos})
          }
        })

        .catch(err=> console.log(err))
    
  },
  login : (req, res) => { 
    res.render('login'); 
  },
  register : (req, res) => { 
    res.render('register'); 
  },

  store: (req, res) => {

      let usuarios = {
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      nombre_usuario: req.body.nombre_usuario,
      telefono: req.body.telefono,
      email: req.body.email,
      fecha_nacimiento: req.body.fecha_nacimiento,
      password: bcrypt.hashSync(req.body.password, 11)

      
      }
        db.User.create(usuarios)
        .then(()=> res.redirect('/'))
        .catch(err => console.log(err))
  }


   }
 
 module.exports = indexController;

 

 
