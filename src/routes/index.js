const express = require('express');
const path = require('path');
const router = express.Router();
const loginpet = require('./loginpet')
const loginwalker = require('./loginwalker')
const registerpet = require('./registerpet')
const registerwalker = require('./registerwalker')
// import home route controller
const home = require('./home');
// const fruits = require('./fruits');
// const singleFruit = require('./singlefruit');
// const error = require('./error');

// add home route
router.get('/', home.get);
router.post('/loginPet',loginpet.post);
router.post('/loginWalker',loginwalker.post);
router.post('/registerPet',registerpet.post);
router.post('/registerWalker',registerwalker.post);
// router.get('/fruits', fruits.get);
// router.get('/fruits/:singleFruit', singleFruit.get);
// router.use(error.client);
// router.use(error.server);

module.exports = router;
