const Favourites = require('./products/favourites');
const Product = require('./products/product');
const ProductsMarks = require('./products/products-marks');
const ProductsTags = require('./products/products-tags');
const Tag = require('./products/tag');

const Role = require('./rolesSystem/role');
const Route = require('./rolesSystem/route');
const RoutesAccess = require('./rolesSystem/routes-access');
const UsersRoles = require('./rolesSystem/users-roles');

const User = require('./users/user');
const DeletionRequest = require('./users/deletion-request');

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
