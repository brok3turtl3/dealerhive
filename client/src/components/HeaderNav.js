import React, {useState} from 'react';
import LoginForm from './LoginForm';


const HeaderNav = () => {

const [showLogin, setShowLogin] = useState(false)


const handleLoginClick = () => {
	setShowLogin(true)
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

			<nav>
				<ul className='flex flex-row'>
					<li className='p-4 text-yellow-200 text-xl' >Sign Up</li>
					<li className='p-4 text-yellow-200 text-xl' onClick={handleLoginClick}>Log In</li>
					<li></li>
				</ul>
			</nav>
		</div>
	);
};

export default HeaderNav;
