import React from 'react';
import styles from '../styles/ChatWindow.module.sass';

const ChatWindow: React.FC = () => {
    return (
        <div className={styles.chatWindow}>
            <div className={styles.header}>
                <img src="../../assets/chat/avatar.png" alt="Лена" />
                <div className={styles.info}>
                    <span className={styles.name}>Лена</span>
                    <span className={styles.status}>
            <span className={styles.online}></span> Онлайн
          </span>
                </div>
            </div>
            <div className={styles.messageList}>
                {/* */}
            </div>
            <div className={styles.input}>
                {/* */}
            </div>
        </div>
    );
};

export default ChatWindow;
