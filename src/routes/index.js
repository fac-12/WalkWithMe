const express = require('express');
const path = require('path');
const router = express.Router();
const loginpet = require('./loginpet')
const loginwalker = require('./loginwalker')
const registerpet = require('./registerpet')
const registerwalker = require('./registerwalker')
const petuniquewalk = require('./petuniquewalk');
const availablepetwalks = require('./availablePetWalks');
const itsamatch = require('./itsamatch');
const home = require('./home');
const newwalk = require('./newwalk');
const error = require('./error');
const logout = require('./logout');

router.get('/', home.get);
router.post('/loginPet',loginpet.post);
router.post('/loginWalker',loginwalker.post);
router.post('/registerPet',registerpet.post);
router.post('/registerWalker',registerwalker.post);
router.get('/petUniqueWalk', petuniquewalk.get);
router.get('/availablePetWalks', availablepetwalks.get);
router.post('/itsAMatch', itsamatch.post);
router.post('/newWalk', newwalk.post);
router.post('/logout',logout.post);

router.use(error.client);
router.use(error.server);

module.exports = router;
