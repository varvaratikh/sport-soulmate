import React, { useState } from 'react';
import { useChatContext } from '../../contexts/ChatContext';
import axios from 'axios';
import styles from '../../styles/chat/MessageInput.module.sass';

const MessageInput: React.FC = () => {
    const [text, setText] = useState('');
    const { selectedContact, setMessages } = useChatContext();

    const handleSend = () => {
        if (text.trim() !== '' && selectedContact) {
            const newMessage = {
                text,
                sender: 'me',
                contactId: selectedContact.id,
            };

            axios.post('/api/messages', newMessage)
                .then(response => {
                    setMessages(prevMessages => [...prevMessages, response.data]);
                    setText('');
                })
                .catch(error => {
                    console.error('Error sending message:', error);
                });
        }
    };

    return (
        <div className={styles.messageInput}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Написать сообщение..."
            />
            <button onClick={handleSend}>Отправить</button>
        </div>
    );
};

export default MessageInput;
