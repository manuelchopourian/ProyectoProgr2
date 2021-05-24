

let  productos = require("../data/products")

let indexController = {

    index : (req, res) => { 
     res.render('index', {productos: productos }); 
    
    },
 


   }
 
 module.exports = indexController;

 
