const db = require('../database/models');
const op = db.Sequelize.Op;

let indexController = {

    index : (req, res) => { 
      db.Product.findAll({
        order:[
          ['fecha_publicacion','DESC']
        ],
        limit:4,
      })
        .then(productos => {
          res.render('index',{productos})
        })
        .catch(err => {
            console.log(err)
            res.render('error',{error: err})
        })
      },
      

  search: (req, res)=>{
    db.Product.findAll({
        where: {
          [op.or]:{ 
            nombre: {[op.like]: `%${req.query.search}%`},
            descripcion: {[op.like]: `%${req.query.search}%`},
            categoria: {[op.like]: `%${req.query.search}%`},
            marca: {[op.like]: `%${req.query.search}%`},
          }
        }
    })
        .then(productos => {
          if(productos.length != 0){
            res.render('search-results', {title:'Resultados de busqueda', productos })
          }
          else{
          res.render('search-results', { title: 'No hay resultados para su criterio de búsqueda', productos})
          }
        })

        .catch(err=> console.log(err))
    
  },
  login : (req, res) => { 
    res.render('login'); 
  },
  register : (req, res) => { 
    res.render('register'); 
  }


   }
 
 module.exports = indexController;

 

 
