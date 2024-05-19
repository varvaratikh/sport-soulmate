import React, { useState } from 'react';
import { Formik, Form, Field, FormikHelpers } from 'formik'; // Import FormikHelpers for typing setSubmitting
import backgroundImage from '../../assets/backgroundLogin.jpg';
import '../../styles/log.scss';
import * as Yup from 'yup';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';
import RegisterPopup from '../registration/RegisterPopup';
import Axios from 'axios';

interface Values {
    email: string;
    password: string;
}

const validationSchema = Yup.object({
    email: Yup.string().required('Обязательное поле'),
    password: Yup.string().required('Обязательное поле'),
});

const LoginPage: React.FC = () => {
    const initialValues: Values = {
        email: '',
        password: '',
    };

    const [showPassword, setShowPassword] = useState(false);
    const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
    const [loginError, setLoginError] = useState(false);

    const handleRegisterPopupOpen = () => {
        setIsRegisterPopupOpen(true);
    };

    const handleRegisterPopupClose = () => {
        setIsRegisterPopupOpen(false);
    };

    const handleLogin = async (values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        try {
            const response = await Axios.post('http://localhost:8080/api/users/login', {
                email: values.email,
                password: values.password,
            });

            const { data } = response;
            // Обработка ответа сервера, например, сохранение токена
            localStorage.setItem('token', data.token);
            setLoginError(false);
            window.location.href = '/protected';
        } catch (error) {
            setSubmitting(false);
            if (Axios.isAxiosError(error)) {
                console.error('Login error:', error);
                if (error.response && error.response.status === 401) {
                    setLoginError(true);
                } else {
                    console.error('Unexpected error:', error);
                }
            } else {
                console.error('An unexpected error occurred:', error);
            }
        } finally {
            setSubmitting(false);
        }
    };






    return (
        <>
            <div className="login-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleLogin}
                >
                    {(formik) => (
                        <Form className="login-form">
                            {loginError && <div className="error-message">Пользователь с указанными данными не найден</div>}
                            <div className="input-field">
                                <label htmlFor="email">Email</label>
                                <div className={`login-input${formik.errors.email && formik.touched.email ? ' input-error' : ''}`}>
                                    <Field
                                        id="email"
                                        name="email"
                                        className={`input-error ${formik.errors.email && formik.touched.email ? 'input-error' : ''}`}
                                    />
                                </div>
                                {formik.touched.email && formik.errors.email && (
                                    <div className="validation-message">{formik.errors.email}</div>
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
                                        autoComplete="current-password"
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
                                <button type="button" onClick={handleRegisterPopupOpen} className="register-button">Регистрация</button>
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
