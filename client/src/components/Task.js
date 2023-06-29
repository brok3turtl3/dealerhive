import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteTask } from '../actions/taskActions';

const Task = ({id, name, taskDescription, date, userId}) => {

    const dispatch = useDispatch();

  const handleDelete = () => {
    console.log('DELETE FIRED!')
    dispatch(deleteTask(id, userId));
  };

    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = new Date(date).toLocaleDateString('en-US', options);
    
  return (
    <div className="  md:min-w-full border md:max-w-[500px] border-yellow-200 rounded p-4 mb-6">
      <div className="flex justify-between items-center mb-2">
        <div className="font-bold">{name}</div>
        <div className="text-gray-300">{formattedDate}</div>
      </div>
      <div className="text-gray-300">{taskDescription}</div>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded mt-2"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  )
}

export default Task