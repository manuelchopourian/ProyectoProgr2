module.exports = (sequelize, dataTypes)=>{

    let alias = 'Favorite';
    let cols = {
    
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        user_id:{
            type: dataTypes.INTEGER
        },
        product_id:{
            type: dataTypes.INTEGER
        },
    
    };
    
    let config = {
        tablename : 'favorites',
        underscored : true,
        timestamps: false
    };
    
    const Favorites = sequelize.define(alias, cols , config);
    
        Favorites.associate = (models)=>{
            
            Favorites.belongsTo(models.User, {
                as: 'user', 
                foreignKey: 'user_id'
            }),
            Favorites.belongsTo(models.Product, {
                as: 'products', 
                foreignKey: 'product_id'
            })
        }
           
    
        return Favorites;
    }