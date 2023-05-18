const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/users'

// POST /api/users (create a user - sign up)
router.post('/notes', ensureLoggedIn, notesCtrl.create);
// POST /api/users/login
router.delete('/notes/:id', ensureLoggedIn, notesCtrl.delete);
// GET /api/users/check-token
// router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

module.exports = router;