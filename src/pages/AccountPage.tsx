import React from 'react';
import TopImage from '../components/images/TopImage';
import formImage from '../assets/form.jpg';
import UserInfoOverlay from '../components/UserInfoOverlay';
import Header from "../components/main_page/header/Header";
import userPhoto from "../assets/userPhoto.jpg"

const AccountPage: React.FC = () => {
    const user = {
        name: 'Лена',
        login: 'elena2021',
        password: '123456789',
        email: 'email@example.com',
        photo: userPhoto
    };

    return (
        <div style={{ position: 'relative' }}>
            <Header/>
            <TopImage imagePath={formImage}/>
            <UserInfoOverlay user={user} />
        </div>
    );
};

export default AccountPage;
