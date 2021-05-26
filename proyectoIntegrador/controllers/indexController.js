let  productos = require("../data/products")

let indexController = {

    index : (req, res) => { 
     res.render('index', {productos: productos }); 
    
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

 
