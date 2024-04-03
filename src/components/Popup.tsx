import React, { useState } from 'react';
import InputField from './InputField';
import Button from './Button';

interface PopupProps {
    onClose: () => void;
    backgroundImage: string;
}

const RegisterPopup: React.FC<PopupProps> = ({ onClose, backgroundImage }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isVisible, setIsVisible] = useState(true);

    const handleUsernameChange = (value: string) => {
        setUsername(value);
    };

    const handlePasswordChange = (value: string) => {
        setPassword(value);
    };

    const handleEmailChange = (value: string) => {
        setEmail(value);
    };

    const handleSubmit = () => {
        // Здесь вы можете добавить логику для отправки данных регистрации на сервер
        console.log('Submitting with username:', username, 'email:', email, 'and password:', password);
        onClose(); // Закрываем попап после успешной отправки данных
        setIsVisible(false); // Скрываем попап
    };

    return (
        <>
            <div className={`popup-overlay ${isVisible ? '' : 'hidden'}`}>
                <div className="background" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
                <div className="popup">
                    <span className="close" onClick={() => { onClose(); setIsVisible(false); }}>&times;</span>
                    <InputField label="Лоигн" value={username} onChange={handleUsernameChange} />
                    <InputField label="Пароль" value={email} onChange={handleEmailChange} />
                    <InputField label="Повторите пароль" type="password" value={password} onChange={handlePasswordChange} />
                    <Button label="Зарегестрироваться" onClick={handleSubmit} />
                </div>
            </div>
        </>
    );
};


export default RegisterPopup;
