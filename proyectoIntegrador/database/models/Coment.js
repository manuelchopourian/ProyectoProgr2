
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
    timestamps: false
};

const Coments = sequelize.define(alias, cols , config);

    Coments.associate = (models)=>{
        
        Coments.belongsTo(models.User, {
            as: 'user', 
            foreignKey: 'user_id'
        }),

        Coments.belongsTo(models.Product, {
            as: 'products', 
            foreignKey: 'product_id'
        })
    }
       

    return Coments;
}