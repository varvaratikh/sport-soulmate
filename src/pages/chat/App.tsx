import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../../components/chat/Header';
import SearchBar from '../../components/chat/SearchBar';
import ChatList from '../../components/chat/ChatList';
import ChatWindow from '../../components/chat/ChatWindow';
import { ChatProvider } from '../../contexts/ChatContext';
import styles from '../../styles/chat/App.module.sass';

const Chat: React.FC = () => {
    return (
        <ChatProvider>
            <div className={styles.app}>
                <Header />
                <div className={styles.content}>
                    <aside>
                        <SearchBar />
                        <ChatList />
                    </aside>
                    <main>
                        <ChatWindow />
                    </main>
                </div>
            </div>
        </ChatProvider>
    );
};

export default Chat;
