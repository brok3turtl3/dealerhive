import asyncHandler from 'express-async-handler';
import Task from '../models/taskModel.js';



//ENDPOINT  POST api/tasks
//PURPOSE   Add a new task
//ACCESS    Private
const addTask = asyncHandler(async (req, res) => {
	const { user, name, taskDescription  } = req.body;
	console.log('Add Task route hit!')

	
	const task = await Task.create({
		user,
		name,
		taskDescription
	});

	if (user) {
		res.status(201).json({
			_id: task._id,
			user: task.user,
			name: task.name,
			taskDescription: task.taskDescription,
			
		});
	} else {
		res.status(400);
		throw new Error('Invalid task data');
	}
});

//ENDPOINT  GET api/tasks
//PURPOSE   Retrieve all tasks by user ID
//ACCESS    Private
const getTasks = asyncHandler(async (req, res) => {
	console.log('getTasks route handler hit!')
	const {userId} = req.query
	console.log(userId)
	const tasks = await Task.find({user: userId});
	res.json(tasks);
});

//ENDPOINT  DELETE api/tasks/:id
//PURPOSE   Delete a task
//ACCESS    Private 
const deleteTask = asyncHandler(async (req, res) => {
	
	const {id} = req.params
	const {userId} = req.query
	console.log(id)
	const task = await Task.findById(id);
	console.log('found the task: ', task)
	
	console.log('Here is the value of task.user :', task.user)
	console.log('Here is the value of task.user.toString() :', task.user.toString())
	console.log('Here is the value of userId : ', userId)
	
	
	if (task && task.user.toString() === userId) {
		await task.deleteOne();
		res.json({ message: 'Task removed' });
	} else {
		res.status(404);
		throw new Error('Could not remove task');
	}
});



export {
	addTask,
    getTasks,
    deleteTask
};