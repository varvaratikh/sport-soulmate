import React from 'react';
import styles from '../styles/MessageInput.module.sass';

const MessageInput: React.FC = () => {
    return (
        <input
            type="text"
            className={styles.messageInput}
            placeholder="Написать сообщение..."
        />
    );
};

export default MessageInput;
