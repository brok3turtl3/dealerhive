import React, {useState, useEffect} from 'react';
import LoginForm from './LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import {logout} from '../actions/userActions'
import { useNavigate } from 'react-router-dom';


const HeaderNav = () => {

	const dispatch = useDispatch()
	const navigate = useNavigate()

const [showLogin, setShowLogin] = useState(false)
const userLogin = useSelector((state) => state.userLogin);

useEffect(() => {
	if (userLogin.userInfo === null) {
	  navigate('/');
	}
  }, [userLogin.userInfo, navigate]);


const handleLoginClick = () => {
	setShowLogin(true)
}

const handleLogoutClick= () => {
	dispatch(logout())
}

const handleClose = () => {
	setShowLogin(false)
}




	return (
		<div className='flex items-center flex-col sm:flex-row justify-between border-b-2 border-blue-500'>
			{showLogin && <LoginForm onClose={handleClose}/>}
			<div className='flex flex-row items-center pt-3 pb-3'>
				<div className='text-5xl sm:text-6xl p-4 '>Sales Hive</div>
				
					<img className='w-16 sm:w-24' src='./images/honey.svg' alt='' />
				
			</div>
			{userLogin.userInfo === null ? (
			<nav>
				<ul className='flex flex-row'>
					{/* <li className='p-4 text-yellow-200 text-xl' >Sign Up</li> */}
					<li className='p-4 text-yellow-200 hover:text-blue-500 text-3xl cursor-pointer' onClick={handleLoginClick}>Log In</li>
					
				</ul>
			</nav>) :( 
				<nav>
				<ul className='flex flex-row'>
					<li className='p-4 text-yellow-200 hover:text-blue-500 text-3xl cursor-pointer' onClick={handleLogoutClick}>Log Out</li>
					
					<li></li>
				</ul>
			</nav>

			)}
		</div>
	);
};

export default HeaderNav;
