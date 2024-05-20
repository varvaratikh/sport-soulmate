import React from 'react';
import { useChatContext } from '../../contexts/ChatContext';
import styles from '../../styles/chat/ChatWindow.module.sass';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const ChatWindow: React.FC = () => {
    const { selectedContact } = useChatContext();

    if (!selectedContact) {
        return <div className={styles.chatWindow}>Выберите контакт, чтобы начать чат</div>;
    }

    return (
        <div className={styles.chatWindow}>
            <div className={styles.header}>
                <img src="../../assets/chat/avatar.png" alt={selectedContact.name} />
                <div className={styles.info}>
                    <span className={styles.name}>{selectedContact.name}</span>
                    <span className={styles.status}>
            <span className={styles.online}></span> Онлайн
          </span>
                </div>
            </div>
            <MessageList />
            <MessageInput />
        </div>
    );
};

export default ChatWindow;
