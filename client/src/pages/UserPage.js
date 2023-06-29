import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getTasks, addTask } from '../actions/taskActions';
import { getUserById } from '../actions/userActions';
import Task from '../components/Task';

const UserPage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const taskList = useSelector((state) => state.taskList);
  const targetUser = useSelector((state) => state.targetUser)
  const [task, setTask] = useState('');

  let { id } = useParams();
  

  useEffect(() => {
    // console.log(userLogin.userInfo._id)
    if (id) {
      console.log('Triggered!! Sending', id)
      dispatch(getUserById(id))
      dispatch(getTasks(id));
    }
  }, [id, dispatch]);

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(id, userLogin.userInfo.name, task, userLogin.userInfo._id, userLogin.userInfo.name, targetUser.targetUserInfo.name))
    dispatch(getTasks(id));
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
            className="bg-gray-200 w-16 h-16 rounded-full mr-8"
            src={targetUser.targetUserInfo?.profilePic}
            alt="Profile Picture"
          />
          <div>
            <h3 className="text-3xl sm:text-4xl font-semibold text-center">
              {!targetUser.targetUserInfo.name ? null : targetUser.targetUserInfo.name}
            </h3>
            <p className="text-2xl mt-2 text-yellow-200 text-center">
              {targetUser.targetUserInfo?.title}
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
              className="border border-gray-300 rounded p-2 mr-2 text-black"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-400 active:bg-blue-700 text-white px-4 py-2 rounded transition-colors duration-200"
            >
              Add Task
            </button>
            {userLogin.userInfo?.seniority < 3 ? <button className="bg-blue-500 hover:bg-blue-400 active:bg-blue-700 text-white px-4 py-2 rounded transition-colors duration-200 ml-4" onClick={handleUserPageClick}>Assign Tasks</button> : null}
          </form>
          <ul className="mt-4">
            {taskList.taskList &&
              taskList.taskList.map((task, index) => (
                
                <li key={index}><Task id = {task._id} name = {task.name} taskDescription = {task.taskDescription} date = {task.date} userId = {task.user}/></li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserPage