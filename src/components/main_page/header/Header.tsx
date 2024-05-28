import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../../styles/header.sass';
// @ts-ignore
import logo from '../../../assets/logo-header.png';

const Header: React.FC = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/');
    };

    return (
        <header className="header-container">
            <nav className="nav-container">
                <img src={logo} alt="Logo" className="logo"/>
                <div className="nav-links">
                    <Link to="/home" className="nav-link">Главная</Link>
                    <a href="#about-section" className="nav-link">О нас</a>
                    <Link to="/chat" className="nav-link">Чат</Link>
                    <Link to="/search" className="nav-link">Поиск</Link>
                    <a href="#news-section" className="nav-link">Новости</a>
                </div>
            </nav>
            <button className="button" onClick={handleLoginClick}>Войти</button>
        </header>
    );
};

export default Header;
