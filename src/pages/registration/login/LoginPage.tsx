import React, { useState } from 'react';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import backgroundImage from '../../../assets/backgroundLogin.jpg';
import './log.scss';
import * as Yup from 'yup';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';
import Axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import RegisterPopup from "../registration/RegisterPopup";
import { useAuth } from "../../../contexts/AuthContext";

interface Values {
    email: string;
    password: string;
}

const validationSchema = Yup.object({
    email: Yup.string().required('Обязательное поле'),
    password: Yup.string().required('Обязательное поле'),
});

const LoginPage: React.FC = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [showPassword, setShowPassword] = useState(false);
    const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
    const [loginError, setLoginError] = useState(false);

    const initialValues: Values = { email: '', password: '' };
    const from = location.state?.from || '/home';

    const handleRegisterPopupOpen = () => setIsRegisterPopupOpen(true);
    const handleRegisterPopupClose = () => setIsRegisterPopupOpen(false);

    const handleLogin = async (values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        try {
            const response = await Axios.post('http://localhost:8080/api/users/login', {
                email: values.email,
                password: values.password,
            });
            const { data } = response;
            login(data.token);
            setLoginError(false);
            navigate(from, { replace: true });
        } catch (error) {
            setSubmitting(false);
            if (Axios.isAxiosError(error) && error.response?.status === 401) {
                setLoginError(true);
            } else {
                console.error('Login error:', error);
            }
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            <div className="login-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleLogin}>
                    {(formik) => (
                        <Form className="login-form">
                            {loginError && <div className="error-message">Пользователь с указанными данными не найден</div>}
                            <div className="input-field">
                                <label htmlFor="email">Email</label>
                                <div className={`login-input${formik.errors.email && formik.touched.email ? ' input-error' : ''}`}>
                                    <Field id="email" name="email" className={`input-error ${formik.errors.email && formik.touched.email ? 'input-error' : ''}`} />
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
                                        {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
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
