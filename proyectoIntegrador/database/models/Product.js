module.exports = (sequelize, dataTypes) => {

let alias = 'Product';
let cols = {

    id: {
        autoIncrement: true,
        primaryKey: true,
        type: dataTypes.INTEGER
    },
    producto:{

        type: dataTypes.STRING
    },
    url_imagen_producto:{

        type: dataTypes.STRING
    },
    fecha_publicacion:{

        type: dataTypes.DATE
    },
    user_id :{
        type: dataTypes.INTEGER
    },
    categoria:{
        type: dataTypes.STRING
    },
    nombre:{
        type: dataTypes.STRING
    },
    marca:{
        type: dataTypes.STRING
    },
    descripcion:{
        type: dataTypes.STRING
    },
    comentarios:{
        type: dataTypes.INTEGER
    }
};

let config = {
tablename : 'products',
timestamps: false,
underscored : true,
};

const Products = sequelize.define(alias, cols , config);
return Products;
 }
