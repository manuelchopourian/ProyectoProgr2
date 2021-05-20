let alias = 'Products';

let cols = {

    datatypes : Agregar
};

let config = {
tablename : 'products',
underscored : true
};

const Products = sequelize.define(alias, cols , config);
return Products
