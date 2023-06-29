import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-row flex-wrap justify-around'>
      <p className='p-3 text-3xl text-yellow-200'>SalesHive &copy; 2023</p>
      <a href='mailto:contact@brok3turtl3@gmail.com' className='p-3 text-3xl text-yellow-200 hover:text-blue-500 transition duration-200 ease-in-out cursor-pointer'>
        Contact Us
      </a>
    </div>
  )
}

export default Footer