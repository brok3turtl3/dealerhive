import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {login} from '../actions/userActions'

const LoginForm = ({ onClose}) => {

	

	const dispatch = useDispatch()

	

	useEffect(() => {
		document.body.classList.add('overflow-hidden');

		return () => {
			document.body.classList.remove('overflow-hidden');
		};
	}, []);

	const [ formData, setFormData ] = useState({
		email: '',
		password: '',
	})

	const { email, password} = formData



	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(login(email, password))
		console.log('HIT!')
		onClose()

	}

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return ReactDOM.createPortal(
		<>
			
				<div className='fixed inset-0 w-4/5 max-w-lg m-auto text-center bg-gray-700 h-1/3 rounded-3xl flex justify-center items-center'>
						<form className="" onSubmit={handleSubmit}>
							<p className="p-3">Please enter your email and password to login.</p>

							<input
							className='bg-gray-800 w-2/3 block m-auto mb-3'
								name="email"
								id="login-email"
								type="email"
								value={email}
								placeholder="Email Address"
								onChange={handleChange}
								required
							/>

							<input
							className='bg-gray-800 w-2/3 block m-auto mb-3'
								name="password"
								id="login-password"
								type="password"
								value={password}
								placeholder="Password"
								onChange={handleChange}
								required
							/>
							<p className=''>Forgot Password?<Link to="/password-reset" className='px-3'>Click here</Link></p>

<div className='mt-3 flex flex-row justify-around'>
							<button className='p-2 border-yellow-500 border-2 rounded-xl' type='submit' onClick={onClose}>
								Cancel
							</button>
							<button className='p-2 border-yellow-500 border-2 rounded-xl' type='submit'>
								Submit
							</button>
							</div>
							<p className='mt-3'>Need an account?<Link to="/register" className='px-3'>Sign up here</Link></p>
						</form>
						
					</div>	
					
		</>,
		document.querySelector('.login-container')
	);
};

export default LoginForm;
