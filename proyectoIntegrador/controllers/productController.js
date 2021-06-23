const e = require('express');
const db = require('../database/models');

let productController = {

  porId: (req, res)=>{
    let primaryKey = req.params.id;
    db.Product.findByPk(primaryKey, {
      include: [{association: 'user'}]
    })
        .then(producto => {
          db.Coment.findAll({
            order:[
              ['fecha_posteo','DESC'],
            ],
            where: {product_id: req.params.id},
            include: [{association: 'user'}]
          })
          .then(comentarioUser => {
            if(req.session.user == undefined){
              res.render('product',{producto, comentarioUser})
            }
            else{
              db.Favorite.findAll({
                where: {
                  product_id: req.params.id,
                  user_id: req.session.user.id
                },
              })
              .then((favoritos)=>res.render('product',{producto, comentarioUser, favoritos}))
            }
          })
        })
        .catch(err => console.log(err));

  },
  add : (req, res) => { 
    if(req.session.user != undefined){
    res.render('product-add'); 
    }
    else{
      res.redirect('/')
    }
    },
  store: (req,res) => {
    let errors = {};
        //chequear los campos obligatorios
        
       if(req.body.nombre == ""){ // El Nombre no debe esta vacio
            errors.productAdd = "Nombre no puede estar vacio"
            res.locals.errors = errors

            return res.render('product-add')

       } 
       else if(req.body.descripcion == ""){ // La descripcion no debe estar vacia
          errors.productAdd = "Descripcion no puede estar vacio"
          res.locals.errors = errors

          return res.render('product-add')

       }
       else{
        let productos = {
        nombre: req.body.nombre,
        url_imagen_producto: req.file.filename,
        marca: req.body.marca,
        descripcion: req.body.descripcion,
        user_id: req.session.user.id

        }
          db.Product.create(productos)
          .then(()=> res.redirect('/'))
          .catch(err => console.log(err))
      }
    },
  delete:(req,res) =>{

      db.Product.findByPk(req.params.id)
      .then((producto)=> {
        if(req.session.user != undefined && producto.user_id == req.session.user.id ){
          res.render('product-delete',{producto})
        }
        else{
          res.redirect('/')
        }
        })
      .catch(err => console.log(err))
  },
  destroy: (req,res) =>{
    db.Coment.destroy({
    where:{
      product_id:req.params.id
    }
  })
  .then(()=>
    db.Favorite.destroy({where:{
      product_id:req.params.id
    }}) 
  .then(()=> 
  db.Product.destroy({
    where:{
      id:req.params.id
    }
  })
  .then(() => res.redirect('/'))
  ))
  .catch(err => console.log(err))
},
    // comentario //
comentar:(req,res)=> {
      if(req.session.user != undefined){
        let comentando = {
          comentario: req.body.comentario,
          user_id: req.session.user.id,
          product_id: req.params.id
          }
          db.Coment.create(comentando)
          .then(()=>
          db.Coment.findAll({
            where: {product_id: req.params.id},
          })
          .then(comentarioUser => {
            let actualizacion = {
              comentarios: comentarioUser.length
          }
          db.Product.update(actualizacion, {
            where:{
              id:req.params.id
            }
          })
          .then(()=> res.redirect('/product/id/' + comentando.product_id))
          .catch(err => console.log(err))
        }))}
        
        
      else{
        res.redirect('/login')
      }
        

  },
  edit:(req,res) =>{
    db.Product.findByPk(req.params.id)
    .then((productos)=>{
      if(req.session.user != undefined && productos.user_id == req.session.user.id ){
      res.render('product-edit',{productos})
      }
      else{
        res.redirect('/')
      }
    })
    .catch(err => console.log(err))
  },
  update:(req,res) =>{
    let producto = {
      nombre: req.body.nombre,
      marca: req.body.marca,
      descripcion: req.body.descripcion,
      user_id: req.session.user.id,
      url_imagen_producto: req.file.filename
      }
    db.Product.update(
      producto, 
      {
      where:{
        id:req.params.id

      }
    })
    .then(()=> res.redirect('/'))
    .catch(err => console.log(err))
  },
  actualizar:(req,res) =>{
    db.Coment.findByPk(req.params.id)
    .then((comentario)=> {
      if(req.session.user != undefined && comentario.user_id == req.session.user.id ){
      res.render('coment-delete',{comentario})
    }
    else{
      res.redirect('/')
    }
  })

    .catch(err => console.log(err))
},
  eliminar: (req,res) =>{
    db.Coment.findByPk(req.params.id)
    .then((productoId)=>
        db.Coment.destroy({
          where:{
            id:req.params.id
          }
        }) 
    .then(() => {
      db.Coment.findAll({
        where: {product_id: productoId.product_id},
      })
      .then((comentarioUser)=> {
      let actualizacion = {
      comentarios: comentarioUser.length
    }
    db.Product.update(actualizacion, {
      where:{
        id: productoId.product_id
      }
    })  
      .then(()=> res.redirect('/product/id/' + productoId.product_id))
      .catch(err => console.log(err))
    
   })
  })
  )
},

todos: (req,res) => {

    db.Product.findAll({
      include: [{association: 'user'}, {association: 'coments'}]
    })
      .then(productos => {
          res.render('all-products',{productos})    
          
        })
      .catch(err => {
          console.log(err)
          res.render('error',{error: err})
      })
      
  

}

}
    
 module.exports = productController;


 