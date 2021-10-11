
// Import components
import Profile from './components/Profile';
import UserLits from './components/UserList';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// context
import UserState from './context/user/UserState';

function App() {
  return (
    <UserState>
      <div className='container p-4'>
        <div className='row'>
          <div className='col-md-7'>
            <UserLits />
          </div>
          <div className='col-md-5'>
            <Profile />
          </div>
        </div>
      </div>
    </UserState>
  );
}

export default App;
