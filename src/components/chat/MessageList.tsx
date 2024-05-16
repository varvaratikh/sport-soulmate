import React from 'react';
import styles from '../../styles/chat/MessageList.module.sass';

const messages = [
    { text: 'привет, в какой день тебе будет удобно встретиться?', mine: true },
    { text: 'привет, я смогу в среду', mine: false },
    { text: 'отлично, тогда я напишу тебе во вторник вечером', mine: true }
];

const MessageList: React.FC = () => {
    return (
        <div className={styles.messageList}>
            {messages.map((msg, index) => (
                <div key={index} className={msg.mine ? styles.myMessage : styles.theirMessage}>
                    {msg.text}
                </div>
            ))}
        </div>
    );
};

export default MessageList;
