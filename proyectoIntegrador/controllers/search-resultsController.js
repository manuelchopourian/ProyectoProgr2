let productos = require('../data/products')
let searchResultsController = {
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
}

 module.exports = searchResultsController;