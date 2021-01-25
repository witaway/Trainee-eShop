const express = require('express');
const setup = require('./loaders');

(async () => {
    const server = express();
    await setup(server);
})();
