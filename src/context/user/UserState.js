import { useReducer } from 'react';
import axios from 'axios';

import UserReducer from './UserReducer';
import UserContext from './UserContext';


const initialState = {
  users: [],
  selectedUser: null,
};

const UserState = (props) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  // get all user
  const getUsers = async() => {
    const response = await axios.get('https://reqres.in/api/users');
    console.log('all', response.data.data);
  };

  // get only user
  const getProfile = async(id) => {
    const response = await axios.get(`https://reqres.in/api/users/${id}`);
    console.log('single', response);
  };

  return (
    <UserContext.Provider value={{
      users: state.users,
      selectedUser: state.selectedUser,
      getUsers,
      getProfile,
    }}>
      {props.children}
    </UserContext.Provider>
  )
};

export default UserState;