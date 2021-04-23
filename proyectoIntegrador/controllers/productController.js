let  productos = require("../data/products")

let productController = {

  index : (req, res) => { 
    res.render('product', {productos: productos }); 
   
   },
  
  
   porId: (req,res) =>{

    res.render('product',{

      producto : productos[req.params.id]

    })

   


  }

}
  
  
  

  
  
 
   
 
 module.exports = productController;


 