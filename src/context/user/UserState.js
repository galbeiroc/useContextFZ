import { useReducer } from 'react';
import UserReducer from './UserReducer';
import UserContext from './UserContext';


const initialState = {
  users: [],
  selectedUser: null,
};

const UserState = (props) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  // get all user
  const getUsers = () => {};

  // get only user
  const getProfile = () => {};

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