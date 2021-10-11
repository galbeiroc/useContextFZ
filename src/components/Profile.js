import { useContext } from "react";
import UserContext from '../context/user/UserContext';

function Profile() {
  const { selectedUser } = useContext(UserContext);

  return (
    <>
      {selectedUser ? (
        <div className="card card-body text-center">
          <img 
            src={selectedUser.avatar}
            alt={selectedUser.first_name}
            className="card-img-top rounded-circle m-auto img-fluid"
            style={{ width: 150 }}
          />
          <h2>{selectedUser.first_name} {selectedUser.last_name}</h2>
          <h6>email: {selectedUser.email}</h6>
        </div>
      ) : (
        <div>
          <p>No user selected</p>
        </div>
      )}
    </>
  )
};

export default Profile;
