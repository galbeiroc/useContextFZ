
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
      <UserLits />
      <Profile />
    </UserState>
  );
}

export default App;
