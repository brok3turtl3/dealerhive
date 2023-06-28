import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {

	const navigate = useNavigate();

	const userInfo = useSelector((state) => state.userLogin);
	


	useEffect(() => {
		if(userInfo.userInfo !== null){
			console.log('PINGED')
			navigate('/homepage')
		}
		console.log(userInfo.userInfo)
	}, [userInfo, navigate])


	return (
		<>
			<section id='description'>
				<h1 className=' text-3xl sm:text-4xl text-center mt-8 text-yellow-200'>
					Connect Your Teams
				</h1>
				<p className='text-lg sm:text-2xl mt-4 p-8 text-center m-auto'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit
					pretium nunc at euismod. Quisque quis tortor ut metus mattis
					ullamcorper vel sed mi. Donec rutrum orci vel nisl accumsan, eu
					suscipit sapien dictum. Integer leo sem, semper vitae nibh sed,
					hendrerit faucibus diam. Vestibulum odio dui, suscipit maximus erat
					et, pharetra aliquam lacus. Interdum et malesuada fames ac ante ipsum
					primis in faucibus. Duis in aliquam diam, et consequat ante. Nulla
					molestie odio non arcu ultrices auctor.
				</p>
			</section>
			<div className='border-b-2 border-blue-500 w-5/6 m-auto' />

			<section id='benefits' className='my-10 '>
				<div id='benefit' className='flex flex-col flex-wrap py-5'>
					<div className='w-5/6 m-auto'>
						<img src='./images/team.jpg' alt='' />
					</div>

					<h1 className=' text-3xl sm:text-4xl text-center mt-8 text-yellow-200'>
						Enhanced Communication
					</h1>
					<p className='text-lg sm:text-2xl mt-4 p-8 text-center m-auto'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit
						pretium nunc at euismod. Quisque quis tortor ut metus mattis
						ullamcorper vel sed mi. Donec rutrum orci vel nisl accumsan, eu
						suscipit sapien dictum. Integer leo sem, semper vitae nibh sed,
						hendrerit faucibus diam. Vestibulum odio dui, suscipit maximus erat
						et, pharetra aliquam lacus. Interdum et malesuada fames ac ante
						ipsum primis in faucibus. Duis in aliquam diam, et consequat ante.
						Nulla molestie odio non arcu ultrices auctor.
					</p>
				</div>

				<div className='border-b-2 border-blue-500 w-5/6 m-auto mb-10' />

				<div className='flex flex-col flex-wrap py-5'>
					<div className='w-5/6 m-auto'>
						<img src='./images/team.jpg' alt='' />
					</div>

					<h1 className=' text-3xl sm:text-4xl text-center mt-8 text-yellow-200'>
						Shared Accountability
					</h1>
					<p className='text-lg sm:text-2xl mt-4 p-8 text-center m-auto'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit
						pretium nunc at euismod. Quisque quis tortor ut metus mattis
						ullamcorper vel sed mi. Donec rutrum orci vel nisl accumsan, eu
						suscipit sapien dictum. Integer leo sem, semper vitae nibh sed,
						hendrerit faucibus diam. Vestibulum odio dui, suscipit maximus erat
						et, pharetra aliquam lacus. Interdum et malesuada fames ac ante
						ipsum primis in faucibus. Duis in aliquam diam, et consequat ante.
						Nulla molestie odio non arcu ultrices auctor.
					</p>
				</div>

				<div className='border-b-2 border-blue-500 w-5/6 m-auto mb-10' />

				<div className='flex flex-col flex-wrap py-5'>
					<div className='w-5/6 m-auto'>
						<img src='./images/team.jpg' alt='' />
					</div>

					<h1 className=' text-3xl sm:text-4xl text-center mt-8 text-yellow-200'>
						Goal Tracking
					</h1>
					<p className='text-lg sm:text-2xl mt-4 p-8 text-center m-auto'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit
						pretium nunc at euismod. Quisque quis tortor ut metus mattis
						ullamcorper vel sed mi. Donec rutrum orci vel nisl accumsan, eu
						suscipit sapien dictum. Integer leo sem, semper vitae nibh sed,
						hendrerit faucibus diam. Vestibulum odio dui, suscipit maximus erat
						et, pharetra aliquam lacus. Interdum et malesuada fames ac ante
						ipsum primis in faucibus. Duis in aliquam diam, et consequat ante.
						Nulla molestie odio non arcu ultrices auctor.
					</p>
				</div>
			</section>
		</>
	);
};

export default LandingPage;
