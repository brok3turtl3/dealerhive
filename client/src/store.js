import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

import {
	userLoginReducer
} from './reducers/userReducers';
import {userListReducer} from './reducers/userListReducers'
import { taskListReducer } from './reducers/taskListReducers';
import { targetUserReducer } from './reducers/targetUserReducers';
import { assignedTaskListReducer } from './reducers/assignedTaskReducers';


const reducer = combineReducers({
	
	userLogin: userLoginReducer,
	taskList: taskListReducer,
	userList: userListReducer,
	targetUser: targetUserReducer,
	assignedTaskList: assignedTaskListReducer
	
});







const initialState = {
	
	// userLogin: {userInfo: null,
	// taskList: null}
};

const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;