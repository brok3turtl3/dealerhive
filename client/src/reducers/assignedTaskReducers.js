import {
	ASSIGNED_TASK_LIST_REQUEST,
ASSIGNED_TASK_LIST_SUCCESS,
 ASSIGNED_TASK_LIST_FAIL
	
} from '../constants/assignedTasklistConstants';

export const assignedTaskListReducer = (state = {assignedTaskList: []}, action) => {
	switch (action.type) {
		case ASSIGNED_TASK_LIST_REQUEST:
			return { ...state, loading: true };
		case ASSIGNED_TASK_LIST_SUCCESS:
			return { ...state, loading: false, assignedTaskList: action.payload };
		case ASSIGNED_TASK_LIST_FAIL:
			return { ...state, loading: false, error: action.payload };
		// case ASSIGNED_TASK_DELETE_REQUEST:
		// 	return { ...state, loading: true};
		// case ASSIGNED_TASK_DELETE_SUCCESS:
		// 	return {
		// 		...state,
		// 		taskList: state.taskList.filter((task) => task._id !== action.payload)
		// 	}
		
		default:
			return state;
	}
};