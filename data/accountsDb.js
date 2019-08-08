const db = require('../data/dbConfig.js');

module.exports = {
  get,
  insert,
  update,
  remove,
  getById
};

function get() {
  return db('accounts');
}

function getById(id) {
  return db('accounts')
    .where({ id })
    .first();
}

function insert(account) {
  return db('accounts')
    .insert(account)
    .then(ids => {
      return getById(ids[0]);
    });
}

function update(id, changes) {
  return db('accounts')
    .where({ id })
    .update(changes)
    .then(ids => {
      return getById(id);
    });
}

function remove(id) {
  return db('accounts')
    .where('id', id)
    .del();
}
