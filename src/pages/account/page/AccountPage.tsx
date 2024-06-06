import React, { useEffect, useState } from 'react';
import './accountPage.scss';
import UserInfoOverlay from '../UserInfoOverlay/UserInfoOverlay';
import DataForm from '../DataForm/DataForm';
import TopImage from '../../../components/images/TopImage';
import formImage from '../../../assets/form.jpg';

const AccountPage: React.FC = () => {
    const [user, setUser] = useState<any>(null);
    const [formData, setFormData] = useState({
        sport: '',
        age: '',
        city: '',
        sports: []
    });

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        } else {
            console.error("Пользователь не найден, необходимо войти в систему");
        }
    }, []);

    if (!user) {
        return <div>Loading...</div>;
    }

    const handleSave = (values: any) => {
        setFormData(values);
        console.log('Сохранено:', values);
    };

    return (
        <div>
            <TopImage imagePath={formImage} />
            <div className="userInfoOverlay">
                <UserInfoOverlay />
            </div>
            <div className="accountPageContainer">
                <DataForm onSave={handleSave} initialValues={formData} />
            </div>
        </div>
    );
};

export default AccountPage;
