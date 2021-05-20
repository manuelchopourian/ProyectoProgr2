let alias = 'Users';

let cols = {

    datatypes : Agregar
};

let config = {
tablename : 'Users',
underscored : true
};

const Users = sequelize.define(alias, cols , config);
return Users
