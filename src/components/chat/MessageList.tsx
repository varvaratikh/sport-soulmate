import React from 'react';
import { useChatContext } from '../../contexts/ChatContext';
import styles from '../../styles/chat/MessageList.module.sass';

const MessageList: React.FC = () => {
    const { messages } = useChatContext();

    return (
        <div className={styles.messageList}>
            {messages.map((msg, index) => (
                <div key={index} className={msg.sender === 'me' ? styles.myMessage : styles.theirMessage}>
                    {msg.text}
                </div>
            ))}
        </div>
    );
};

export default MessageList;
