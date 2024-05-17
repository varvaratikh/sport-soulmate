import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/header.sass';
// @ts-ignore
import logo from '../../../assets/logo-header.png';


const Header: React.FC = () => {
    return (
        <header className="header-container">
            <nav className="nav-container">
                <img src={logo} alt="Logo" className="logo"/>
                <div className="nav-links">
                    <Link to="/" className="nav-link">Главная</Link>
                    <Link to="/about" className="nav-link">О нас</Link>
                    <Link to="/chat" className="nav-link">Чат</Link>
                    <Link to="/search" className="nav-link">Поиск</Link>
                    <Link to="/news" className="nav-link">Новости</Link>
                </div>
            </nav>
            <button className="button">Войти</button>
        </header>
    );
};

export default Header;