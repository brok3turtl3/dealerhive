import express from 'express';

import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

import { addTask, getTasks, deleteTask } from '../controllers/taskController.js';

router.post('/',  addTask);
router.get('/',  getTasks);
router.delete('/:id', deleteTask);


export default router;