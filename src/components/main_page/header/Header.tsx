import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
// @ts-ignore
import logo from '../../../assets/logo-header.png';

const Header: React.FC = () => {
    const navigate = useNavigate();
    const { isAuthenticated, logout } = useAuth();

    const handleButtonClick = () => {
        if (isAuthenticated) {
            navigate('/account');
        } else {
            navigate('/');
        }
    };

    const handleChatClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (!isAuthenticated) {
            event.preventDefault();
            navigate('/');
        }
    };

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const styles: { [key: string]: React.CSSProperties } = {
        headerContainer: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '30px 50px',
            zIndex: 100,
        },
        logo: {
            width: '40px',
            height: '40px',
            marginRight: '20px',
        },
        navContainer: {
            display: 'flex',
            alignItems: 'center',
        },
        navLinks: {
            display: 'flex',
            alignItems: 'center',
        },
        navLink: {
            color: '#ffffff',
            textDecoration: 'none',
            marginRight: '35px',
            fontSize: '18px',
            padding: '2px',
        },
        buttonContainer: {
            display: 'flex',
            alignItems: 'center',
        },
        button: {
            backgroundColor: 'transparent',
            border: '2px solid #ffffff',
            borderRadius: '43px',
            color: '#ffffff',
            fontSize: '18px',
            padding: '8px 46px',
            marginLeft: '23px',
        }
    };

    return (
        <header style={styles.headerContainer}>
            <nav style={styles.navContainer}>
                <img src={logo} alt="Logo" style={styles.logo} />
                <div style={styles.navLinks}>
                    <Link to="/home" style={styles.navLink}>Главная</Link>
                    <a href="#about-section" style={styles.navLink}>О нас</a>
                    <Link to="/chat" style={styles.navLink} onClick={handleChatClick}>Чат</Link>
                    <Link to="/search" style={styles.navLink}>Поиск</Link>
                    <a href="#news-section" style={styles.navLink}>Новости</a>
                </div>
            </nav>
            <div style={styles.buttonContainer}>
                {isAuthenticated ? (
                    <>
                        <button style={styles.button} onClick={handleButtonClick}>Личный кабинет</button>
                        <button style={styles.button} onClick={handleLogout}>Выйти</button>
                    </>
                ) : (
                    <button style={styles.button} onClick={handleButtonClick}>Войти</button>
                )}
            </div>
        </header>
    );
};

export default Header;
