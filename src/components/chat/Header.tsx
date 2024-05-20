import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import styles from '../../styles/chat/Header.module.sass';
import Home from '../../pages/main_page/MainPage_app';
import About from '../../pages/About';
import Chat from '../../pages/chat/App';
import SearchPage from '../../pages/search/SearchPage';
import NewsHomePage from '../../components/main_page/news_fragment/NewsHomePage';
// @ts-ignore
import logo from "../../assets/chat/logo_black.png";


const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} alt="Logo" className="logo"/>
            </div>
            <nav>
                <Link to="/" className="nav-link">Главная</Link>
                <Link to="/about" className="nav-link">О нас</Link>
                <Link to="/chat" className="nav-link">Чат</Link>
                <Link to="/search" className="nav-link">Поиск</Link>
                <Link to="/news" className="nav-link">Новости</Link>
            </nav>
        </header>
    );
};

export default Header;
