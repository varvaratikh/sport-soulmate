import React, { useState } from 'react';

interface MessageInputProps {
    onSendMessage: (message: { sender: string; content: string }) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage }) => {
    const [message, setMessage] = useState('');

    const handleSend = () => {
        if (message.trim() !== '') {
            onSendMessage({ sender: 'You', content: message });
            setMessage('');
        }
    };

    return (
        <div className="message-input">
            <input
                type="text"
                placeholder="Написать сообщение..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={handleSend}>Отправить</button>
        </div>
    );
};

export default MessageInput;
