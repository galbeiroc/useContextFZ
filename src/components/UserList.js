import { useContext, useEffect } from "react";
import UserContext from '../context/user/UserContext';

function UserList() {
  const { getUsers, users } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []);

  console.log(users);
  return (
    <div>
      User List
    </div>
  )
};

export default UserList;
