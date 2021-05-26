module.exports = (sequelize, dataTypes)=>{

let alias = 'Products';
let cols = {

    id: {
        autoIncrement: true,
        primaryKey: true,
        type: dataTypes.INTEGER
    },
    nombre_producto:{

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
};

let config = {
tablename : 'products',
underscored : true
};

const Products = sequelize.define(alias, cols , config);
return Products;
 }
