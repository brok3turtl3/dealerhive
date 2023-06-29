import express from 'express';

import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

import { authUser, getUserProfile, registerUser, updateUserProfile, getUsers, deleteUser, getUserById, updateUser } from '../controllers/userController.js';

router.post('/login', authUser);
//router.get('/profile', protect, getUserProfile);
//router.put('/profile', protect, updateUserProfile);
router.get('/:seniority', getUsers)
router.post('/', registerUser);
//router.delete('/:id', protect, admin, deleteUser)
router.get('/user/:id', getUserById)
//router.put('/:id', protect, admin, updateUser)

export default router;