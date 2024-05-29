import React from 'react';
import Modal from 'react-modal';
import * as Yup from 'yup';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import styled from 'styled-components';
import Axios from 'axios';
import './register.scss';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

interface FormValues {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), undefined], 'Passwords must match').required('Required'),
});

const RegisterPopup: React.FC<Props> = ({ isOpen, onClose }) => {
    const initialValues: FormValues = { name: '', email: '', password: '', confirmPassword: '' };

    const handleSubmit = async (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
        try {
            await Axios.post('http://localhost:8080/api/users/register', {
                name: values.name,
                email: values.email,
                password: values.password,
            });
            setSubmitting(false);
            onClose();
            window.location.href = '/home';
        } catch (error) {
            console.error('Error:', error);
            setSubmitting(false);
        }
    };

    return (
        <StyledModal isOpen={isOpen} onRequestClose={onClose} contentLabel="Register" ariaHideApp={false} overlayClassName="overlay">
            <StyledContainer className="register-popup-container">
                <CloseButton onClick={onClose}><CrossIcon /></CloseButton>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    {(formik) => (
                        <Form>
                            <FieldContainer>
                                <label htmlFor="name">Name</label>
                                <Field id="name" name="name" type="text" />
                                {formik.touched.name && formik.errors.name && <div className="validation-message">{formik.errors.name}</div>}
                            </FieldContainer>
                            <FieldContainer>
                                <label htmlFor="email">Email</label>
                                <Field id="email" name="email" type="email" />
                                {formik.touched.email && formik.errors.email && <div className="validation-message">{formik.errors.email}</div>}
                            </FieldContainer>
                            <FieldContainer>
                                <label htmlFor="password">Password</label>
                                <Field id="password" name="password" type="password" />
                                {formik.touched.password && formik.errors.password && <div className="validation-message">{formik.errors.password}</div>}
                            </FieldContainer>
                            <FieldContainer>
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <Field id="confirmPassword" name="confirmPassword" type="password" />
                                {formik.touched.confirmPassword && formik.errors.confirmPassword && <div className="validation-message">{formik.errors.confirmPassword}</div>}
                            </FieldContainer>
                            <button type="submit" className="register-btn">Зарегистрироваться</button>
                        </Form>
                    )}
                </Formik>
            </StyledContainer>
        </StyledModal>
    );
};

const StyledModal = styled(Modal)`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border-radius: 50px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    max-width: 750px;
    width: 80%;
    max-height: 500px;
    height: 80%;
    overflow: auto;
    text-align: center;

    .overlay {
        background-color: rgba(0, 0, 0, 0.5);
    }
`;

const StyledContainer = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const FieldContainer = styled.div`
    margin-bottom: 20px;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 20px;
    right: 30px;
    background: none;
    border: none;
    cursor: pointer;
    color: grey;
`;

const CrossIcon = styled.span`
    display: block;
    width: 20px;
    height: 20px;
    position: relative;
    transform: rotate(45deg);
    &:before,
    &:after {
        content: '';
        position: absolute;
        width: 2px;
        height: 20px;
        background-color: #000;
    }
    &:before {
        transform: rotate(90deg);
    }
    &:after {
        transform: rotate(180deg);
    }
`;

export default RegisterPopup;
