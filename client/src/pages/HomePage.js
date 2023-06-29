import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getTasks, addTask, getAssignedTasks } from '../actions/taskActions';
import Task from '../components/Task';

const HomePage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const taskList = useSelector((state) => state.taskList);
  const assignedTaskList = useSelector ((state) => state.assignedTaskList)

  const [task, setTask] = useState('');
  

  useEffect(() => {
    // console.log(userLogin.userInfo._id)
    if (userLogin.userInfo?._id) {
      console.log('Triggered!! Sending', userLogin.userInfo._id)
      dispatch(getTasks(userLogin.userInfo._id));
      dispatch(getAssignedTasks(userLogin.userInfo._id));
    }
  }, [userLogin, dispatch]);

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(userLogin.userInfo._id, userLogin.userInfo.name, task, userLogin.userInfo._id, userLogin.userInfo.name, userLogin.userInfo.name))
    dispatch(getTasks(userLogin.userInfo._id));
    setTask('')
  };

  const handleUserPageClick = () => {
    navigate('/users')
  }

  return (
    <div className=" flex items-center justify-center py-4">
      <div className="   min-w-[80%] flex flex-col items-center">
        <div className="flex items-center mb-4"> 
          <img
            className="bg-gray-200 w-30 h-30 rounded-full mr-8"
            src={userLogin.userInfo?.profilePic}
            alt="Profile Picture"
          />
          <div>
            <h3 className="text-3xl sm:text-4xl font-semibold text-center">
              {!userLogin.userInfo ? null : userLogin.userInfo.name}
            </h3>
            <p className="text-2xl text-yellow-200 text-center ">
              {userLogin.userInfo?.title}
            </p>
          </div>
          
        </div>

        <div className="min-w-full mt-8">
          <form onSubmit={handleTaskSubmit} className='mb-6 flex justify-center items-center'>
            <input
              type="text"
              placeholder="Enter a task"
              value={task}
              onChange={handleTaskChange}
              className="border border-gray-300 rounded p-2 mr-4 text-black"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-400 active:bg-blue-700 text-white px-4 py-2 rounded transition-colors duration-200"
            >
              Add Task
            </button>
            {userLogin.userInfo?.seniority < 3 ? <button className="bg-blue-500 hover:bg-blue-400 active:bg-blue-700 text-white px-4 py-2 rounded transition-colors duration-200 ml-4" onClick={handleUserPageClick}>Assign Tasks</button> : null}
          </form>


          <div className="flex flex-col lg:flex-row lg:space-x-10">
            <div className="lg:w-1/2">
              <h3 className="text-center text-2xl font-bold text-blue-500 mb-2">My Tasks</h3>
              <ul className="mt-4">
                {taskList.taskList &&
                  taskList.taskList.map((task, index) => (
                    <li key={index}><Task id={task._id} name={task.name} taskDescription={task.taskDescription} date={task.date} userId={task.user}/></li>
                  ))}
              </ul>
            </div>
            
            <div className="lg:w-1/2">
              <h3 className="text-center text-2xl font-bold text-blue-500 mb-2">My Assigned Tasks</h3>
              <ul className="mt-4">
                {assignedTaskList.assignedTaskList &&
                  assignedTaskList.assignedTaskList.map((task, index) => (
                    <li key={index}><Task id={task._id} name={task.assignedToName} taskDescription={task.taskDescription} date={task.date} userId={task.user}/></li>
                  ))}
              </ul>
            </div>
          </div>
        
        
        
        </div>
      </div>
    </div>
  );
}

export default HomePage