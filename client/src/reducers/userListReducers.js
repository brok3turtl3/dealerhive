import {
	 USER_LIST_REQUEST,
USER_LIST_SUCCESS,
USER_LIST_FAIL,
 USER_LIST_RESET
	
} from '../constants/userConstants';

export const userListReducer = (state = {userList: []}, action) => {
	switch (action.type) {
		case USER_LIST_REQUEST:
			return { ...state, loading: true };
		case USER_LIST_SUCCESS:
			return { ...state, loading: false, userList: action.payload };
		case USER_LIST_FAIL:
			return { ...state, loading: false, error: action.payload };
            case USER_LIST_RESET:
                return {}
		
		
		default:
			return state;
	}
};