import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getTasks, addTask } from '../actions/taskActions';
import Task from '../components/Task';

const HomePage = () => {

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const taskList = useSelector((state) => state.taskList);
  const [task, setTask] = useState('');
  

  useEffect(() => {
    // console.log(userLogin.userInfo._id)
    if (userLogin.userInfo?._id) {
      console.log('Triggered!! Sending', userLogin.userInfo._id)
      dispatch(getTasks(userLogin.userInfo._id));
    }
  }, [userLogin, dispatch]);

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(userLogin.userInfo._id, userLogin.userInfo.name, task))
    dispatch(getTasks(userLogin.userInfo._id));
    setTask('')
  };

  return (
    <div className=" flex items-center justify-center py-4">
      <div className="   min-w-[80%] flex flex-col items-center">
        <div className="flex items-center mb-4"> 
          <img
            className="bg-gray-200 w-16 h-16 rounded-full mr-8"
            src="path_to_profile_picture"
            alt="Profile Picture"
          />
          <div>
            <h3 className="text-3xl sm:text-4xl font-semibold text-center">
              {!userLogin.userInfo ? null : userLogin.userInfo.name}
            </h3>
            <p className="text-sm text-yellow-200 text-center">
              Software Developer
            </p>
          </div>
        </div>

        <div className="min-w-full mt-8">
          <form onSubmit={handleTaskSubmit}>
            <input
              type="text"
              placeholder="Enter a task"
              value={task}
              onChange={handleTaskChange}
              className="border border-gray-300 rounded p-2 mr-2"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add Todo
            </button>
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

export default HomePage