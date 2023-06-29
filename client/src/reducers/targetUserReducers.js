import {
	
	USER_DETAILS_REQUEST,
	USER_DETAILS_SUCCESS,
	USER_DETAILS_FAIL,
	USER_DETAILS_RESET
	
} from '../constants/userConstants';


export const targetUserReducer = (state = {targetUserInfo: []}, action) => {
	switch (action.type) {
		case USER_DETAILS_REQUEST:
			return { ...state, loading: true };
		case USER_DETAILS_SUCCESS:
			return { ...state, loading: false, targetUserInfo: action.payload };
		case USER_DETAILS_FAIL:
			return { ...state, loading: false, error: action.payload };
		
		default:
			return state;
	}
};