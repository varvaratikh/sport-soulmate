import React from 'react';
import './userInfoOverlay.scss';
import { useAuth } from '../../../contexts/AuthContext';

const defaultAvatarUrl = 'https://cojo.ru/wp-content/uploads/2022/12/avatarki-dlia-vatsapa-50-1.webp';

const UserInfoOverlay: React.FC = () => {
    const { user } = useAuth();

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="userInfoOverlay">
            <div className="userInfoContainer">
                <img
                    src={user.avatarUrl || defaultAvatarUrl}
                    alt="User Avatar"
                    className="user-avatar"
                />
                <div className="userName">{user.name}</div>
                <strong className="strongText">Email:</strong>
                <div className="userDetail">{user.email}</div>
            </div>
        </div>
    );
};

export default UserInfoOverlay;
