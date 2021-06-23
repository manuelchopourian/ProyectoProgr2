module.exports = (sequelize, dataTypes)=>{

    let alias = 'Follow';
    let cols = {
    
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        user_id:{
            type: dataTypes.INTEGER
        },
        following_id:{
            type: dataTypes.INTEGER
        },
    
    };
    
    let config = {
        tablename : 'follows',
        underscored : true,
        timestamps: false
    };
    
    const Follows = sequelize.define(alias, cols , config);
    
        Follows.associate = (models)=>{
            
            Follows.belongsTo(models.User, {
                as: 'users', 
                foreignKey: 'user_id'
            }),
            Follows.belongsTo(models.User, {
                as: 'following', 
                foreignKey: 'following_id'
            })
        }
           
    
        return Follows;
    }