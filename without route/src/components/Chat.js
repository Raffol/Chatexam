import React, { useState, useEffect } from 'react';
import './Chat.css';

const Chat = ({ currentUser }) => {
    const getStoredMessages = () => {
        const savedMessages = localStorage.getItem('chatMessages');
        return savedMessages ? JSON.parse(savedMessages) : [];
    };

    const [messages, setMessages] = useState(getStoredMessages);
    const [newMessage, setNewMessage] = useState("");

    const saveMessagesToLocalStorage = (messages) => {
        localStorage.setItem('chatMessages', JSON.stringify(messages));
    };

    const sendMessage = () => {
        if (newMessage.trim() !== "") {
            const updatedMessages = [
                ...messages,
                { id: messages.length + 1, text: newMessage, sender: currentUser }
            ];
            setMessages(updatedMessages);
            saveMessagesToLocalStorage(updatedMessages);
            setNewMessage("");
        }
    };

    useEffect(() => {
        const storedMessages = getStoredMessages();
        if (storedMessages.length) {
            setMessages(storedMessages);
        }
    }, []);

    return (
        <div className="chat-container">
            <div className="messages">
                {messages.map((message) => (
                    <div key={message.id} className={`message ${message.sender === currentUser ? 'own' : 'other'}`}>
                        <span className="sender">{message.sender}:</span> {message.text}
                    </div>
                ))}
            </div>

            <div className="message-input">
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chat;
