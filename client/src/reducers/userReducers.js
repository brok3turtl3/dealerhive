import {
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGIN_FAIL,
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS,
	USER_REGISTER_FAIL,
	USER_LOGOUT,
	USER_DETAILS_REQUEST,
	USER_DETAILS_SUCCESS,
	USER_DETAILS_FAIL,
	USER_DETAILS_RESET,
	USER_UPDATE_PROFILE_REQUEST,
	USER_UPDATE_PROFILE_SUCCESS,
	USER_UPDATE_PROFILE_FAIL,
	USER_LIST_REQUEST,
	USER_LIST_SUCCESS,
	USER_LIST_FAIL,
	USER_LIST_RESET,
	USER_DELETE_REQUEST,
	USER_DELETE_SUCCESS,
	USER_DELETE_FAIL,
	USER_UPDATE_REQUEST,
	USER_UPDATE_SUCCESS,
	USER_UPDATE_FAIL,
	USER_UPDATE_RESET
} from '../constants/userConstants';


export const userLoginReducer = (state = {userInfo: null}, action) => {
	switch (action.type) {
		case USER_LOGIN_REQUEST:
			return { ...state, loading: true };
		case USER_LOGIN_SUCCESS:
			return { ...state, loading: false, userInfo: action.payload };
		case USER_LOGIN_FAIL:
			return { ...state, loading: false, error: action.payload };
		case USER_LOGOUT:
			return {...state, userInfo: null};
		default:
			return state;
	}
};