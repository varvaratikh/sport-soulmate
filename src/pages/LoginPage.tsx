import React, { useState } from 'react';
import InputField from '../components/InputField';
import backgroundImage from '../assets/backgroundLogin.jpg';
import '../styles/login.css';
import Button from "../components/Button";
import RegisterPopup from "../components/Popup";

const LoginPage: React.FC = () => {
    const [showRegisterPopup, setShowRegisterPopup] = useState(false); // Состояние для отображения/скрытия попапа

    const handleLoginChange = (value: string) => {
        // Обработчик изменения логина
        console.log('New login:', value);
    };

    const handlePasswordChange = (value: string) => {
        // Обработчик изменения пароля
        console.log('New password:', value);
    };

    const handleLogin = () => {
        // Обработчик нажатия на кнопку "Login"
        console.log('Login button clicked');
        // Добавьте здесь логику для входа пользователя
    };

    const handleRegister = () => {
        // Обработчик нажатия на кнопку "Register"
        console.log('Register button clicked');
        setShowRegisterPopup(true); // Показать попап при нажатии на кнопку "Регистрация"
    };

    const [loginValue, setLoginValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');


    return (
        <>
            <div className="login-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="login-form">
                    <InputField label="Логин" value={loginValue} onChange={setLoginValue} />
                    <InputField label="Пароль" type="password" value={passwordValue} onChange={setPasswordValue} />
                    <div className="button-container">
                        <Button label="Войти" onClick={handleLogin} />
                        <span className="text">Ещё не создали аккаунт?</span>
                        <Button label="Регистрация" onClick={handleRegister} className="register-button" />
                    </div>
                </div>
            </div>
            {showRegisterPopup && <RegisterPopup backgroundImage={backgroundImage} onClose={() => setShowRegisterPopup(false)} />} {/* Отображение попапа при условии */}
        </>
    );
};

export default LoginPage;
