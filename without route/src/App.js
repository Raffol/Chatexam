import React, { useState } from 'react';
import Chat from './components/Chat';
import Login from './components/Login';

function App() {
  const [currentUser, setCurrentUser] = useState(null);


  const handleLogin = (user) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
      <div className="App">
        {currentUser ? (
            <div>
              <h2>Welcome, {currentUser}</h2>
              <button onClick={handleLogout}>Logout</button>
              <Chat currentUser={currentUser} />
            </div>
        ) : (
            <Login onLogin={handleLogin} />
        )}
      </div>
  );
}

export default App;
