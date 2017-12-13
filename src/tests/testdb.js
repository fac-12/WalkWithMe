const test = require('tape');
const bcrypt = require('bcryptjs');
const runDbBuild = require('../database/db_build.js');
// const change_walk_status = require('../queries/change_walk.status.js');
const check_pet_exists = require('../queries/check_pet_exists.js');
// const check_pet_password = require('../queries/check_pet_password.js');
// const check_walker_exists = require('../queries/check_walker_exists.js');
// const check_walker_password = require('../queries/check_walker_password.js');
// const get_all_walks = require('../queries/get_all_walks.js');
// const get_pet_own_walks = require('../queries/get_pet_own_walks.js');
// const new_walk = require('../queries/new_walk.js');
// const register_pet= require('../queries/register_pet.js');
// const register_walker = require('../queries/register_walker.js')

test('tape is working', (t) => {
  const num = 2;
  t.equal(num, 2, 'should return 2');
  t.end();
})

test('check pet exists query', (t) => {

  runDbBuild(function(err, res) {
    let petObjExists = { name: 'Fluffy', password: 'pear', email:'f@g.com' }
    check_pet_exists(petObjExists, (err, res) => {
      if(err) console.log(err);
      t.equal(res[0].case, true, 'If pet exists then check_pet_exists should return true');
    })
    let petObjectNotExist = { name: 'Hello', password:'goodbye', email: 'fjdfhk@fsjfl.com'};
    check_pet_exists(petObjectNotExist, (err, res) => {
      if(err) console.log(err);
        t.equal(res[0].case, false, 'If pet does not exist then check_pet_exists should return false');
        t.end();
    })
  })
})

test('check walker exists query', (t) => {

  runDbBuild(function(err, res) {
    let walkerObjExists = { name: '', password: 'pear', email:'f@g.com' }
    check_pet_exists(petObjExists, (err, res) => {
      if(err) console.log(err);
      t.equal(res[0].case, true, 'If pet exists then check_pet_exists should return true');
    })
    let petObjectNotExist = { name: 'Hello', password:'goodbye', email: 'fjdfhk@fsjfl.com'};
    check_pet_exists(petObjectNotExist, (err, res) => {
      if(err) console.log(err);
        t.equal(res[0].case, false, 'If pet does not exist then check_pet_exists should return false');
        t.end();
    })
  })
})
