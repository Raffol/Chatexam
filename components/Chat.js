import React, { useState } from 'react';

const Chat = ({ currentUser, otherUser, messages, onSendMessage }) => {
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            onSendMessage(currentUser, otherUser, newMessage);
            setNewMessage('');
        }
    };

    return (
        <div className="chat-container">
            <h2>Chat as {currentUser}</h2>

            <div className="messages">
                {messages.map((message) => (
                    (message.sender === currentUser || message.receiver === currentUser) && (
                        <div key={message.id} className={`message ${message.sender === currentUser ? 'own' : 'other'}`}>
                            <strong>{message.sender}:</strong> {message.text}
                        </div>
                    )
                ))}
            </div>

            <div className="message-input">
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                />
                <button onClick={handleSendMessage}>Отправить</button>
            </div>
        </div>
    );
};

export default Chat;
