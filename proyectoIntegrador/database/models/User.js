module.exports = (sequelize, dataTypes)=>{

let alias = 'Users';
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
    url_imagen: {
        type: dataTypes.STRING,
        
    },
    telefono: {
        type: dataTypes.INTEGER,
        
    }


};

let config = {
tablename : 'Users',
underscored : true
};

const Users = sequelize.define(alias, cols , config);
return Users; 
 }
