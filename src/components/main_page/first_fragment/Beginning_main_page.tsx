import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

const Beginning_main_page: React.FC = () => {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const handleClick = () => {
        if (isAuthenticated) {
            navigate('/account');
        } else {
            navigate('/', { state: { from: '/account' } });
        }
    };

    return (
        <div style={{ backgroundImage: `url(${require('../../../assets/main_page/background.jpg')})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100vh' }}>
            <p style={{ position: 'absolute', top: 432, left: 59, fontSize: 75, fontWeight: 'bold', color: 'white' }}>
                Хочешь заняться спортом, но не с кем? Заполняй <span style={{ color: '#4E80FF', cursor: 'pointer' }} onClick={handleClick}>анкету</span> и найди своего спортивного SoulMate!
            </p>
        </div>
    );
};

export default Beginning_main_page;