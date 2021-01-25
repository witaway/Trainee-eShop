const express = require('express');
const init = require('./loaders');

(async () => {
    const server = express();
    await init(server);
})();
