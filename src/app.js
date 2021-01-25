const express = require('express');
const setup = require('./loaders');

const server  = express();
const passport = require('passport');

setup(server, passport);