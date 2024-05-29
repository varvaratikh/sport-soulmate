import React from 'react';

interface Message {
    id: number;
    sender: string;
    content: string;
}

interface MessageListProps {
    messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
    return (
        <div className="message-list">
            {messages.map((message) => (
                <div key={message.id} className={`message ${message.sender === 'You' ? 'sent' : 'received'}`}>
                    <p>{message.content}</p>
                </div>
            ))}
        </div>
    );
};

export default MessageList;
