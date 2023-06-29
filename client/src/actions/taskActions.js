import axios from 'axios';

import {
	TASK_LIST_REQUEST,
	TASK_LIST_SUCCESS,
	TASK_LIST_FAIL,
	TASK_CREATE_REQUEST,
	TASK_CREATE_SUCCESS,
	TASK_CREATE_FAIL,
	TASK_DELETE_REQUEST,
	TASK_DELETE_SUCCESS,
	TASK_DELETE_FAIL
	
} from '../constants/taskListConstants';

import {
	ASSIGNED_TASK_LIST_REQUEST,
	ASSIGNED_TASK_LIST_SUCCESS,
	ASSIGNED_TASK_LIST_FAIL
} from '../constants/assignedTasklistConstants'

export const getTasks = (userId) => async (dispatch) => {
    console.log('getTasks action hit!!!')
    console.log(userId)
	try {
		dispatch({
			type: TASK_LIST_REQUEST,
		});

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const { data } = await axios.get(
			`http://localhost:3000/api/tasks/?userId=${userId}`,
			
			config
		);

        console.log('taskActions after axios :', data)

		dispatch({
			type: TASK_LIST_SUCCESS,
			payload: data,
		});

		
	} catch (error) {
		console.log(error.message);
		dispatch({
			type: TASK_LIST_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const getAssignedTasks = (userId) => async (dispatch) => {
	console.log('getTasks action hit!!!')
    console.log(userId)
	try {
		dispatch({
			type: ASSIGNED_TASK_LIST_REQUEST,
		});

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const { data } = await axios.get(
			`http://localhost:3000/api/tasks/assignedTasks/?userId=${userId}`,
			
			config
		);

        console.log('taskActions after axios :', data)

		dispatch({
			type: ASSIGNED_TASK_LIST_SUCCESS,
			payload: data,
		});

		
	} catch (error) {
		console.log(error.message);
		dispatch({
			type: ASSIGNED_TASK_LIST_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}

}

export const addTask = (user, name, taskDescription, assignedBy, assignedByName, assignedToName) => async (dispatch) => {
    console.log('ADDTASKS action hit!!!')
    console.log(user, name, taskDescription)
	try {
		dispatch({
			type: TASK_CREATE_REQUEST,
		});

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const data = await axios.post(
			`http://localhost:3000/api/tasks/`,
			{ user, name, taskDescription, assignedBy, assignedByName, assignedToName},
			config
		);

        console.log('taskActions after axios :', data)

		dispatch({
			type: TASK_CREATE_SUCCESS,
			payload: data,
		});

		
	} catch (error) {
		console.log(error.message);
		dispatch({
			type: TASK_CREATE_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const deleteTask = (taskId, userId) => async (dispatch) => {
	try {

		dispatch({
			type: TASK_DELETE_REQUEST,
		});
		console.log('This is the taskId being sent :', taskId)

	  const data = await axios.delete(`/api/tasks/${taskId}?userId=${userId}`);
	  console.log('this is the data in my deleteTask: ',data)

	  dispatch({
		type: TASK_DELETE_SUCCESS,
		payload: taskId,
	});


	  
	} catch (error) {
		console.log(error.message);
		dispatch({
			type: TASK_CREATE_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
  };