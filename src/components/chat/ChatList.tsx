import React from 'react';
import { useChatContext } from '../../contexts/ChatContext';
import styles from '../../styles/chat/ChatList.module.sass';

const ChatList: React.FC = () => {
    const { contacts, setSelectedContact } = useChatContext();

    return (
        <div className={styles.chatList}>
            <h2 className={styles.title}>Избранное</h2>
            <div className={styles.favorites}>
                {contacts.map((contact) => (
                    <div key={contact.id} className={styles.favorite} onClick={() => setSelectedContact(contact)}>
                        <img src="../../assets/chat/avatar.png" alt={contact.name} />
                        <span>{contact.name}</span>
                    </div>
                ))}
            </div>
            <h2 className={styles.title}>Сообщения</h2>
            <div className={styles.messages}>
                {contacts.map((contact) => (
                    <div key={contact.id} className={styles.chat} onClick={() => setSelectedContact(contact)}>
                        <div className={styles.avatarContainer}>
                            <img src="../../assets/chat/avatar.png" alt={contact.name} className={styles.avatar} />
                            <span className={styles.online}></span>
                        </div>
                        <div className={styles.chatInfo}>
                            <span className={styles.name}>{contact.name}</span>
                            <span className={styles.lastMessage}></span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChatList;
