const express = require('express');

const router = express.Router();

const Accounts = require('../data/accountsDb.js');

router.get('/', async (req, res) => {
  try {
    const accounts = await Accounts.get();
    res.status(200).json(accounts);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ error: 'The account information could not be found' });
  }
});

router.post('/', async (req, res) => {
  try {
    const account = await Accounts.insert(req.body);
    res.status(201).json(account);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'There was an error creating account' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updated = await Accounts.update(req.params.id, req.body);
    res.status(200).json(updated);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'There was an error updating the account' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Accounts.remove(req.params.id);
    res.status(200).json(deleted);
  } catch (err) {
    res.status(500).json({ error: 'There was an error deleting the account' });
  }
});

module.exports = router;
