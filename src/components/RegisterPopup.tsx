import React, { useState } from 'react';
import Modal from 'react-modal';
import '../styles/log.scss';

const RegisterPopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <button onClick={openModal} style={{ background: 'transparent', transition: 'all 0.3s ease', fontSize: '0.6em', color: 'whitesmoke', cursor: 'pointer', border: 'none' }}>Регистрация</button>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="Регистрация"
            >
                <h2>Форма регистрации</h2>

                <button onClick={closeModal}>Закрыть</button>
            </Modal>
        </div>
    );
};

export default RegisterPopup;
