module.exports = (sequelize, dataTypes)=>{

let alias = 'User';
let cols = {

    id: {
        autoIncrement: true,
        primaryKey: true,
        type: dataTypes.INTEGER
    },
    nombre: {
        type: dataTypes.STRING
    },
    apellido: {
        type: dataTypes.STRING
    },
    nombre_usuario: {
        type: dataTypes.STRING,
        unique: true
    },
    email: {
        type: dataTypes.STRING,
        unique: true
    },
    password: {
        type: dataTypes.STRING,
    
    },
    fecha_nacimiento: {
        type: dataTypes.DATE,
        
    },
    url_imagen_usuario: {
        type: dataTypes.STRING,
        allowNull: true,
        defaultValue:'default-image.png'
        
    },
    telefono: {
        type: dataTypes.INTEGER,
        allowNull: true,
        
    },
    created_at:{
        type: dataTypes.DATE
    },
    updated_at:{
        type: dataTypes.DATE
    },


};

let config = {
tablename : 'users',
underscored : true,
timestamps: false,
};

const Users = sequelize.define(alias, cols , config);

Users.associate = (models)=>{
    // Relacion
    Users.hasMany(models.Product, {
        as: 'products', 
        foreignKey: 'user_id'
    }),
    Users.hasMany(models.Coment, {
        as: 'coments', 
        foreignKey: 'user_id'
    }),
    Users.hasMany(models.Favorite, {
        as: 'favorites', 
        foreignKey: 'user_id'
    })
}

return Users; 
 }
