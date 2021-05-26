
module.exports = (sequelize, dataTypes)=>{

let alias = 'Coment';
let cols = {

    id: {
        autoIncrement: true,
        primaryKey: true,
        type: dataTypes.INTEGER
    },
    comentario:{
        type: dataTypes.STRING
    },
    fecha_posteo:{
        type: dataTypes.DATE
    },
    user_id:{
        type: dataTypes.INTEGER
    },
    product_id:{
        type: dataTypes.INTEGER
    },

};

let config = {
    tablename : 'coments',
    underscored : true,
};

const Coments = sequelize.define(alias, cols , config);
    return Coments;
}