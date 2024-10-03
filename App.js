import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Redirect } from 'react-router-dom';
import Chat from './components/Chat';
import Login from './components/Login';

function App() {
    const [messages, setMessages] = useState([]);

    const addMessage = (sender, receiver, messageText) => {
        const newMessage = { id: messages.length + 1, sender, receiver, text: messageText };
        setMessages([...messages, newMessage]);
    };

    const handleLogin = (username, password) => {
        if ((username === 'User1' && password === '123') || (username === 'User2' && password === '456')) {
            setCurrentUser(username);
        } else {
            alert('Invalid username or password');
        }
    };

    const handleLogout = () => {
        setCurrentUser(null);
    };

    return (
        <Router>
            <div className="App">
                <Routes>
                    {!currentUser && (
                        <Route path="/login">
                            <Login onLogin={handleLogin} />
                        </Route>
                    )}

                    {currentUser && (
                        <>
                            <Route path="/chat">
                                <Chat
                                    currentUser={currentUser}
                                    otherUser={currentUser === 'User1' ? 'User2' : 'User1'}
                                    messages={messages}
                                    onSendMessage={addMessage}
                                />
                                <button onClick={handleLogout}>Выход</button>
                            </Route>
                            <Redirect to="/chat" />
                        </>
                    )}

                    <Redirect to="/login" />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
