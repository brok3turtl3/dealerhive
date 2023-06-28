import axios from 'axios';

import {
	USER_LOGIN_FAIL,
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGOUT
	
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