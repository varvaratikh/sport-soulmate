import React from 'react';

import formImage from '../../../assets/form.jpg';
import userPhoto from "../../../assets/userPhoto.jpg"

import { Formik, Form, FormikProps } from 'formik';
import './accountPage.scss';
import UserInfoOverlay from "../UserInfoOverlay/UserInfoOverlay";
import DataForm from "../DataForm/DataForm";
import TopImage from "../../../components/images/TopImage";

const AccountPage: React.FC = () => {
    const user = {
        name: 'Лена',
        login: 'elena2021',
        password: '123456789',
        email: 'email@example.com',
        photo: userPhoto
    };

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
                <UserInfoOverlay user={user} />
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
