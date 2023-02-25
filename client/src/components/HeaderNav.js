import React from 'react';

const HeaderNav = () => {
	return (
		<div className='flex items-center flex-col sm:flex-row justify-between border-b-2 border-blue-500'>
			<div className='flex flex-row items-center pt-3 pb-3'>
				<div className='text-5xl sm:text-6xl p-4'>Sales Hive</div>
				
					<img className='w-16 sm:w-24' src='./images/honey.svg' alt='' />
				
			</div>

			<nav>
				<ul className='flex flex-row'>
					<li className='p-4'>Sign Up</li>
					<li className='p-4'>Log In</li>
					<li></li>
				</ul>
			</nav>
		</div>
	);
};

export default HeaderNav;
