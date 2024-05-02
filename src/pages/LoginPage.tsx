import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import backgroundImage from '../assets/backgroundLogin.jpg';
import '../styles/log.scss';
import '../styles/register.scss'
import * as Yup from 'yup';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';
import RegisterPopup from './RegisterPopup';

interface Values {
    login: string;
    password: string;
}

const validationSchema = Yup.object({
    login: Yup.string().required('Обязательное поле'),
    password: Yup.string().required('Обязательное поле'),
});

const LoginPage: React.FC = () => {
    const initialValues = {
        login: '',
        password: '',
    };

    const [showPassword, setShowPassword] = useState(false);
    const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);

    const handleRegisterPopupOpen = () => {
        setIsRegisterPopupOpen(true);
    };

    const handleRegisterPopupClose = () => {
        setIsRegisterPopupOpen(false);
    };

    return (
        <>
            <div className="login-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 500);
                    }}
                >
                    {(formik) => (
                        <Form className="login-form">
                            <div className="input-field">
                                <label htmlFor="login">Логин</label>
                                <div className={`login-input${formik.errors.login && formik.touched.login ? ' input-error' : ''}`}>
                                    <Field
                                        id="login"
                                        name="login"
                                        className={`input-error ${formik.errors.login && formik.touched.login ? 'input-error' : ''}`}
                                    />
                                </div>
                                {formik.touched.login && formik.errors.login && (
                                    <div className="validation-message">{formik.errors.login}</div>
                                )}
                            </div>
                            <div className="input-field">
                                <label htmlFor="password">Пароль</label>
                                <div className={`password-input${formik.errors.password && formik.touched.password ? ' input-error' : ''}`}>
                                    <Field
                                        id="password"
                                        name="password"
                                        type={showPassword ? 'text' : 'password'}
                                        className={formik.errors.password && formik.touched.password ? 'input-error' : ''}
                                    />
                                    <button
                                        type="button"
                                        className="show-password-button"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <RiEyeOffFill/> : <RiEyeFill/>}
                                    </button>
                                </div>

                                {formik.touched.password && formik.errors.password && (
                                    <div className="validation-message">{formik.errors.password}</div>
                                )}
                            </div>
                            <div className="button-container">
                                <button type="submit" className="button" disabled={formik.isSubmitting}>
                                    Войти
                                </button>
                                <span className="text">Ещё не создали аккаунт?</span>
                                <button onClick={handleRegisterPopupOpen} className="register-button">Регистрация</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
            <RegisterPopup isOpen={isRegisterPopupOpen} onClose={handleRegisterPopupClose} />
        </>
    );
};

export default LoginPage;
