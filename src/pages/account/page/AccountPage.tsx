import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Formik, Form, FormikProps } from 'formik';
import './accountPage.scss';
import UserInfoOverlay from '../UserInfoOverlay/UserInfoOverlay';
import DataForm from '../DataForm/DataForm';
import TopImage from '../../../components/images/TopImage';
import formImage from '../../../assets/form.jpg';

const AccountPage: React.FC = () => {
    const [user, setUser] = useState<any>(null);

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

    const initialValues = {
        sport: '',
        age: '',
        city: ''
    };

    const handleSave = (values: typeof initialValues) => {
        console.log('Сохранено:', values);
    };

    return (
        <div>
            <TopImage imagePath={formImage} />
            <div className="userInfoOverlay">
                <UserInfoOverlay />
            </div>
            <Formik initialValues={initialValues} onSubmit={handleSave}>
                {(formikProps: FormikProps<typeof initialValues>) => (
                    <Form>
                        <div className="accountPageContainer">
                            <DataForm
                                onChange={(field, value) => formikProps.setFieldValue(field, value)}
                                onSave={formikProps.submitForm}
                            />
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default AccountPage;
