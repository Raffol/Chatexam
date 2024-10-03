import React, { useState } from 'react';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const users = {
        User1: '123',
        User2: '456',
    };

    const handleLogin = () => {
        if (users[username] && users[username] === password) {
            onLogin(username);
        } else {
            setErrorMessage('Invalid username or password');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>

            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

            <div className="user-input">
                <label>Username:</label>
                <input
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>

            <div className="password-input">
                <label>Password:</label>
                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <button onClick={handleLogin} disabled={!username || !password}>Login</button>
        </div>
    );
};

export default Login;
