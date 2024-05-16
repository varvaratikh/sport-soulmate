import React from 'react';
import styles from '../styles/Header.module.sass';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src="../../assets/chat/logo_black.png" alt="SportSoulMate" />
            </div>
            <nav>
                <a href="#">Главная</a>
                <a href="#">О нас</a>
                <a href="#">Чат</a>
                <a href="#">Поиск</a>
                <a href="#">Новости</a>
            </nav>
        </header>
    );
};

export default Header;
