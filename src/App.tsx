import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/registration/LoginPage';
import Header from './components/main_page/header/Header';
import Home from './pages/Home';
import About from './pages/About';
import Chat from './pages/Chat';
import HomePage from "./components/main_page/middle/HomePage";
import NewsHomePage from "./components/main_page/news_fragment/NewsHomePage";
import AccountPage from "./pages/account/AccountPage";
import SearchPage from "./pages/search/SearchPage";
import UserList from './pages/UserList';

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/account" element={<AccountPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/users" element={<UserList />} />
            </Routes>
        </Router>
    );
};

export default App;
