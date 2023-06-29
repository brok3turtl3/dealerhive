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

export const taskListReducer = (state = {taskList: []}, action) => {
	switch (action.type) {
		case TASK_LIST_REQUEST:
			return { ...state, loading: true };
		case TASK_LIST_SUCCESS:
			return { ...state, loading: false, taskList: action.payload };
		case TASK_LIST_FAIL:
			return { ...state, loading: false, error: action.payload };
		case TASK_DELETE_REQUEST:
			return { ...state, loading: true};
		case TASK_DELETE_SUCCESS:
			return {
				...state,
				taskList: state.taskList.filter((task) => task._id !== action.payload)
			}
		
		default:
			return state;
	}
};