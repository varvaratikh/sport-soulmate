import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

interface Message {
    id: number;
    sender: string;
    content: string;
}

const ChatWindow: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:8080/messages')
            .then(response => {
                setMessages(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('There was an error fetching messages!', error);
            });
    }, []);

    const sendMessage = (message: { sender: string; content: string }) => {
        axios.post('http://localhost:8080/messages', message)
            .then(response => {
                setMessages([...messages, response.data]);
            })
            .catch(error => {
                console.error('There was an error sending the message!', error);
            });
    };

    return (
        <div className="chat-window">
            {loading ? (
                <p>Loading messages...</p>
            ) : (
                <MessageList messages={messages} />
            )}
            <MessageInput onSendMessage={sendMessage} />
        </div>
    );
};

export default ChatWindow;
