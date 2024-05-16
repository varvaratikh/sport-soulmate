import React from 'react';
import styles from '../styles/ChatList.module.sass';


const ChatList: React.FC = () => {
    const chats = [
        { name: 'Лена', message: 'Сегодня в 13?', time: '17:34', online: true, unread: 4 }
    ];

    return (
        <div className={styles.chatList}>
            <h2 className={styles.title}>Избранное</h2>
            <div className={styles.favorites}>
                {chats.map((chat, index) => (
                    <div key={index} className={styles.favorite}>
                        <img src="../../assets/chat/avatar.png" alt={chat.name} />
                        <span>{chat.name}</span>
                    </div>
                ))}
            </div>
            <h2 className={styles.title}>Сообщения</h2>
            <div className={styles.messages}>
                {chats.map((chat, index) => (
                    <div key={index} className={styles.chat}>
                        <div className={styles.avatarContainer}>
                            <img src="../../assets/chat/avatar.png" alt={chat.name} className={styles.avatar} />
                            <span className={chat.online ? styles.online : styles.offline}></span>
                        </div>
                        <div className={styles.chatInfo}>
                            <span className={styles.name}>{chat.name}</span>
                            <span className={styles.lastMessage}>{chat.message}</span>
                        </div>
                        <div className={styles.chatMeta}>
                            <span className={styles.time}>{chat.time}</span>
                            {chat.unread > 0 && <span className={styles.unread}>{chat.unread}</span>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChatList;
