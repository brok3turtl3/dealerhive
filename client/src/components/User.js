import React from 'react'
import { Link } from 'react-router-dom'; // Assuming you are using react-router for navigation

const User = ({user}) => { // Assuming 'user' prop is an object containing 'name' and 'title'
  return (
    <div className="md:min-w-full border md:max-w-[500px] border-yellow-200 rounded p-4 mb-6 flex flex-wrap">
      <div className="w-full md:w-1/2">
        <div className="flex justify-between items-center mb-2">
          <div className="font-bold">{user.name}</div>
          <div className="text-gray-300">{user.title}</div>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-end">
        <Link to={`/users/${user._id}`} // Assuming 'user' object has an 'id' property
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
        >
          Go to page
        </Link>
      </div>
    </div>
  )
}

export default User
