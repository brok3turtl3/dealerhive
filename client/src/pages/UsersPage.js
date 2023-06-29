import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { getUserList } from '../actions/userActions';
import User from '../components/User';

const UsersPage = () => {

  const userLogin = useSelector((state) => state.userLogin);
  const userList = useSelector((state) => state.userList)
  

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(getUserList(userLogin.userInfo.seniority))
  
  },[])




  return (
    <ul className="mt-4">
            {userList.userList &&
              userList.userList.map((user, index) => (
                
                <li key={index}><User user = {user} /></li>
              ))}
          </ul>
  )
}

export default UsersPage