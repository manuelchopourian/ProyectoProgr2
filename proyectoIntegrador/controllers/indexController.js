const db = require('../database/models');

let indexController = {

    index: (req, res) => { 
      db.Product.findAll()
        .then(productos => {
          res.render('index',{productos})
        })
        .catch(err => {
            console.log(err)
            res.render('error',{error: err})
        })
      },
    
    search: function (req,res, next){

      let result = []
      for(let i=0; i < productos.length; i++) { 

        if(productos[i].producto.includes(req.query.search.toLowerCase())){
          result.push(productos[i])
        }
      };
        res.render('search-results', {
          productos: result
    })
   },

    login : (req, res) => { 
      res.render('login'); 
    },

    register : (req, res) => { 
      res.render('register'); 
    },

   }
 
 module.exports = indexController;

 

 
