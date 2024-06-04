import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/registration/login/LoginPage';
import Header from './components/main_page/header/Header';
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

const App: React.FC = () => {
    return (
        <AuthProvider>
            <Router>
                <Header />
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
