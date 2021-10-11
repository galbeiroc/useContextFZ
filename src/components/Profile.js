import { useContext, useEffect } from "react";
import UserContext from '../context/user/UserContext';

function Profile() {
  const { getProfile, selectedUser } = useContext(UserContext);

  useEffect(() => {
    getProfile(3);
  }, []);

  console.log(selectedUser)
  return (
    <div>
      Profile
    </div>
  )
};

export default Profile;
