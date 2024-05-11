import React from 'react';
import TopImage from '../../components/images/TopImage';
import formImage from '../../assets/form.jpg';
import UserInfoOverlay from './UserInfoOverlay';
import userPhoto from "../../assets/userPhoto.jpg"
import DataForm from "./DataForm";
import { Formik, Form, FormikProps } from 'formik';

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
            <TopImage imagePath={formImage}/>
            <UserInfoOverlay user={user} />
            <Formik initialValues={initialValues} onSubmit={handleSave}>
                {(formikProps: FormikProps<typeof initialValues>) => (
                    <Form>
                        <DataForm
                            onChange={(field, value) => formikProps.setFieldValue(field, value)}
                            onSave={formikProps.submitForm}
                        />
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default AccountPage;
