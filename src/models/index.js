const Favourites = require('./products/favourites');
const Product = require('./products/product');
const ProductsMarks = require('./products/productsMarks');
const ProductsTags = require('./products/productsTags');
const Tag = require('./products/tag');

const Role = require('./rolesSystem/role');
const Route = require('./rolesSystem/route');
const RoutesAccess = require('./rolesSystem/routesAccess');
const UsersRoles = require('./rolesSystem/usersRoles');

const User = require('./users/user');
const DeletionRequest = require('./users/deletionRequest');

const models = {
    Favourites,
    Product,
    ProductsMarks,
    ProductsTags,
    Tag,

    Role,
    Route,
    RoutesAccess,
    UsersRoles,

    User,
    DeletionRequest,
};

module.exports = models;
