import React from 'react';
import styled from 'styled-components';

interface UserInfoOverlayProps {
    user: {
        name: string;
        login: string;
        password: string;
        email: string;
        photo: string;
    };
}

const UserInfoContainer = styled.div`
    width: 25%;
    height: 65%;
    background-color: #ffffff;
    padding: 60px;
    border-radius: 30px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    text-align: center;
    margin-top: 100px;
    display: flex;
    flex-direction: column; /* Stack children vertically */
    align-items: center;
`;

const UserPhoto = styled.img`
    width: 180px;
    height: 180px;
    border-radius: 50%;
    margin-bottom: 15px;
`;

const UserName = styled.div`
    font-size: 40px;
    font-weight: 350;
    margin-bottom: 30px;
   
`;

const UserDetail = styled.div`
    margin-bottom: 30px;
    font-weight: 300;
    margin-top: 5px;
    color: grey;
    font-size: 20px;
`;

const StrongText = styled.strong`
    font-size: 25px;
    font-weight: 400;
    margin-bottom: 5px;
     /* Example color */
`;

const UserInfoOverlay: React.FC<UserInfoOverlayProps> = ({ user }) => {
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transform: 'translateX(-28%)',
            }}
        >
            <UserInfoContainer>
                <UserPhoto src={user.photo} alt="User Photo"/>
                <UserName>{user.name}</UserName>
                <StrongText>Логин:</StrongText>
                <UserDetail>
                    {user.login}
                </UserDetail>
                <StrongText>Пароль:</StrongText>
                <UserDetail>
                    {user.password}
                </UserDetail>
                <StrongText>Email:</StrongText>
                <UserDetail>
                    {user.email}
                </UserDetail>
            </UserInfoContainer>
        </div>
    );
};

export default UserInfoOverlay;
