let alias = 'Coments';

let cols = {

    datatypes : Agregar
};

let config = {
tablename : 'coments',
underscored : true
};

const Coments = sequelize.define(alias, cols , config);
return Coments
