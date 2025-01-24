// backend/routes/userRoutes.js

const express = require('express');
const User = require('../models/User');

const router = express.Router();

// Create User
router.post('/', async (req, res) => {
  const { name, email, age } = req.body;
  try {
    const newUser = new User({ name, email, age });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error saving user', error: err.message });
  }
});

// Get All Users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching users', error: err.message });
  }
});

// Update User
router.put('/:id', async (req, res) => {
  const { name, email, age } = req.body;
  try {
    await User.findByIdAndUpdate(req.params.id, { name, email, age });
    res.status(200).json({ message: 'User updated successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error updating user', error: err.message });
  }
});



// Delete User
router.delete('/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting user', error: err.message });
  }
});

module.exports = router;
