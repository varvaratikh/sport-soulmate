import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Header from '../../components/chat/Header';
import SearchBar from '../../components/chat/SearchBar';
import ChatList from '../../components/chat/ChatList';
import ChatWindow from '../../components/chat/ChatWindow';
import { ChatProvider } from '../../contexts/ChatContext';
import styles from '../../styles/chat/App.module.sass';

const Chat: React.FC = () => {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);

    if (!isAuthenticated) {
        return null;
    }

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
