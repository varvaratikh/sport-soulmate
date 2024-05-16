import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/registration/LoginPage';
import Header from './components/main_page/header/Header';
import Home from './pages/main_page/MainPage_app';
import About from './pages/About';
import Chat from './pages/chat/App';
import HomePage from "./components/main_page/middle/HomePage";
import NewsHomePage from "./components/main_page/news_fragment/NewsHomePage";
import AccountPage from "./pages/account/AccountPage";
import SearchPage from "./pages/search/SearchPage";

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
                <Route path="/search" element={<SearchPage/>} />
            </Routes>
            {/*<HomePage/>*/}
            {/*<NewsHomePage/>*/}
        </Router>
    );
};

export default App;