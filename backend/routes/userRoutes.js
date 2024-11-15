const express = require('express');
const upload = require('../middleware/multer'); // Import multer middleware
const { createUser, getAllUsers, getUserById, updateUser, deleteUser } = require('../controllers/userController');

const router = express.Router();

// Routes for CRUD operations
router.post('/create', upload.single('photo'), createUser);  // 'photo' is the field name in the form
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.put('/:id', upload.single('photo'), updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
