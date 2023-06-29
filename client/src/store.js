import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

import {
	userLoginReducer
} from './reducers/userReducers';
import { taskListReducer } from './reducers/taskListReducers';


const reducer = combineReducers({
	
	userLogin: userLoginReducer,
	taskList: taskListReducer
	
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