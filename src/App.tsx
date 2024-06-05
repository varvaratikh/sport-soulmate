import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import LoginPage from './pages/registration/login/LoginPage';
import MainHeader from './components/main_page/header/Header';
import ChatHeader from './components/chat/Header';
import Home from './pages/main_page/MainPage_app';
import About from './components/main_page/middle/HomePage';
import Chat from './pages/chat/App';
import HomePage from "./components/main_page/middle/HomePage";
import NewsHomePage from "./components/main_page/news_fragment/NewsHomePage";
import AccountPage from "./pages/account/page/AccountPage";
import SearchPage from "./pages/search/SearchPage";
import UserList from './pages/UserList';
import PrivateRoute from './components/route/PrivateRoute';
import { AuthProvider } from './contexts/AuthContext';

const HeaderWrapper: React.FC = () => {
    const location = useLocation();

    if (location.pathname === '/') {
        return null;
    }

    if (location.pathname.startsWith('/chat')) {
        return <ChatHeader />;
    }

    return <MainHeader />;
};



const App: React.FC = () => {
    return (
        <AuthProvider>
            <Router>
                <HeaderWrapper />
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route element={<PrivateRoute />}>
                        <Route path="/users" element={<UserList />} />
                        <Route path="/chat" element={<Chat />} />
                        <Route path="/account" element={<AccountPage />} />
                        <Route path="/search" element={<SearchPage />} />
                    </Route>
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
