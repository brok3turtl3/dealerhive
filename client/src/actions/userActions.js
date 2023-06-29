import axios from 'axios';

import {
	USER_LOGIN_FAIL,
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGOUT,
	USER_LIST_REQUEST,
	USER_LIST_SUCCESS ,
	USER_LIST_FAIL ,
	USER_LIST_RESET,
	USER_DETAILS_REQUEST,
	USER_DETAILS_SUCCESS,
	USER_DETAILS_FAIL,
	
} from '../constants/userConstants';

export const login = (email, password) => async (dispatch) => {
    console.log('HIT!!')
	try {
		dispatch({
			type: USER_LOGIN_REQUEST,
		});

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const { data } = await axios.post(
			'http://localhost:3000/api/users/login',
			{ email, password },
			config
		);

		dispatch({
			type: USER_LOGIN_SUCCESS,
			payload: data,
		});

		localStorage.setItem('userInfo', JSON.stringify(data));
	} catch (error) {
		console.log(error.message);
		dispatch({
			type: USER_LOGIN_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const logout = () => async (dispatch) => {
	localStorage.removeItem('userInfo');
	dispatch({ type: USER_LOGOUT });
	// dispatch({ type: USER_DETAILS_RESET });
	//document.location.href = '/login'
};

export const getUserList = (seniority) => async (dispatch) => {
	console.log('getUserList ACTION HIT!!!')
	console.log(typeof seniority)
	try {
		dispatch({
			type: USER_LIST_REQUEST,
		});

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const { data } = await axios.get(
			`http://localhost:3000/api/users/${seniority}`,
			
			config
		);

		console.log(data)

		dispatch({
			type: USER_LIST_SUCCESS,
			payload: data,
		});

		localStorage.setItem('userInfo', JSON.stringify(data));
	} catch (error) {
		console.log(error.message);
		dispatch({
			type: USER_LIST_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}

}

export const getUserById = (id) => async (dispatch) => {
	console.log('getUserById ACTION HIT!!!')
	
	try {
		dispatch({
			type: USER_DETAILS_REQUEST,
		});

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		

		const { data } = await axios.get(
			`http://localhost:3000/api/users/user/${id}`,
			
			config
		);

		console.log(data)

		dispatch({
			type: USER_DETAILS_SUCCESS,
			payload: data,
		});

		
	} catch (error) {
		console.log(error.message);
		dispatch({
			type: USER_DETAILS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}

}