
// Import components
import Profile from './components/Profile';
import UserLits from './components/UserList';

import './App.css';

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
