import React from 'react';
import Header from '../../components/chat/Header';
import SearchBar from '../../components/chat/SearchBar';
import ChatList from '../../components/chat/ChatList';
import ChatWindow from '../../components/chat/ChatWindow';
import styles from '../../styles/chat/App.module.sass';
import {Route, Routes} from "react-router-dom";
import LoginPage from "../registration/LoginPage";
import Home from "../main_page/MainPage_app";
import About from "../About";
import AccountPage from "../account/AccountPage";
import SearchPage from "../search/SearchPage";



const App: React.FC = () => {
    return (
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
    );
};

export default App;
