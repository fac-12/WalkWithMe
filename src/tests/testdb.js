const test = require('tape');
const bcrypt = require('bcryptjs');
const runDbBuild = require('../database/db_build.js');
// const change_walk_status = require('../queries/change_walk.status.js');
const check_pet_exists = require('../queries/check_pet_exists.js');
const check_pet_password = require('../queries/check_pet_password.js');
const check_walker_exists = require('../queries/check_walker_exists.js');
const check_walker_password = require('../queries/check_walker_password.js');
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
    let walkerObjExists = { name: 'Becky', password: 'pear', email:'a@b.com' }
    check_walker_exists(walkerObjExists, (err, res) => {
      if(err) console.log(err);
      t.equal(res[0].case, true, 'If walker exists then check_walker_exists should return true');
    })
    let walkerObjectNotExist = { name: 'Hello', password:'goodbye', email: 'fjdfhk@fsjfl.com'};
    check_walker_exists(walkerObjectNotExist, (err, res) => {
      if(err) console.log(err);
        t.equal(res[0].case, false, 'If walker does not exist then check_walker_exists should return false');
        t.end();
    })
  })
})

test('get pet hash password', (t) => {

  runDbBuild(function(err, res) {
    let pet = {name:'Fluffy', password:'$2a$10$j8TPlpZ9LREJS.ZaYqghvulYc8KCWsq75f8o9IzA.l4z8mR14bDVm',email: 'f@g.com', photourl: 'https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?auto=format&fit=crop&w=750&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D', type: 'dog'}
    check_pet_password(pet.email, (err, res) => {
      if(err) console.log(err);
      t.equal(res.rows[0].password,'$2a$10$j8TPlpZ9LREJS.ZaYqghvulYc8KCWsq75f8o9IzA.l4z8mR14bDVm', 'The hash for Fluffy/f@g should match the one in the database');
    })
    t.end();
    })
  })
test('get walker hash password', (t) => {

    runDbBuild(function(err, res) {
      let walker = { name: 'Becky', password: '$2a$10$Dvo41SczFq9GD7vymGyHy.dFY09lsurZgQEwYLEV5NOY5hMRrsHxC', email:'a@b.com' }
      check_walker_password(walker.email, (err, res) => {
        if(err) console.log(err);
        t.equal(res.rows[0].password,'$2a$10$Dvo41SczFq9GD7vymGyHy.dFY09lsurZgQEwYLEV5NOY5hMRrsHxC', 'The hash for walker Becky/a@b.com should match the one in the database');
      })
      t.end();
      })
    })
