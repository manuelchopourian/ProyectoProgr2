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
        defaultValue:'/images/users/default-image.png'
        
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
underscored : true
};

const Users = sequelize.define(alias, cols , config);
return Users; 
 }
