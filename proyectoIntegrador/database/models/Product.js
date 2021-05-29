module.exports = (sequelize, dataTypes) => {

let alias = 'Product';
let cols = {

    id: {
        autoIncrement: true,
        primaryKey: true,
        type: dataTypes.INTEGER
    },
    producto:{
        type: dataTypes.STRING,
        allowNull: true,
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
        type: dataTypes.STRING,
        allowNull: true,
    },
    nombre:{
        type: dataTypes.STRING
    },
    marca:{
        type: dataTypes.STRING,
        allowNull: true,
    },
    descripcion:{
        type: dataTypes.STRING,
        allowNull: true,
    },
    comentarios:{
        type: dataTypes.INTEGER,
        allowNull: true,
    },
    updated_at:{
        type: dataTypes.DATE
    },
};

let config = {
tablename : 'products',
timestamps: false,
underscored : true,
};

const Products = sequelize.define(alias, cols , config);
return Products;


 }
