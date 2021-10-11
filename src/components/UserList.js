import { useContext, useEffect } from "react";
import UserContext from '../context/user/UserContext';

function UserList() {
  const { getUsers } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div>
      User List
    </div>
  )
};

export default UserList;
