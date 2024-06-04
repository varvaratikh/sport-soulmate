import React from 'react';
import './userInfoOverlay.scss';

interface UserInfoOverlayProps {
    user: {
        name: string;
        login: string;
        password: string;
        email: string;
        photo: string;
    };
}

const UserInfoOverlay: React.FC<UserInfoOverlayProps> = ({ user }) => {
    return (
        <div className="userInfoOverlay">
            <div className="userInfoContainer">
                <img src={user.photo} alt="User Photo" className="userPhoto" />
                <div className="userName">{user.name}</div>
                <strong className="strongText">Логин:</strong>
                <div className="userDetail">{user.login}</div>
                <strong className="strongText">Пароль:</strong>
                <div className="userDetail">{user.password}</div>
                <strong className="strongText">Email:</strong>
                <div className="userDetail">{user.email}</div>
            </div>
        </div>
    );
};

export default UserInfoOverlay;
