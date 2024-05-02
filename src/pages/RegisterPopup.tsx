import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import BackgroundImage from '../components/BackgroundImage';
import '../styles/register.scss';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
        .required('Required'),
});

const RegisterPopup: React.FC<Props> = ({ isOpen, onClose }) => {
    const initialValues = {
        email: '',
        password: '',
        confirmPassword: '',
    };

    return (
        <StyledModal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Register"
            ariaHideApp={false}
            overlayClassName="overlay"
        >
            
            <StyledContainer>
                <h2>Register</h2>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                            onClose();
                        }, 500);
                    }}
                >
                    {(formik) => (
                        <Form>
                            <div>
                                <label htmlFor="email">Email</label>
                                <Field type="email" name="email" />
                                {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <Field type="password" name="password" />
                                {formik.touched.password && formik.errors.password && <div>{formik.errors.password}</div>}
                            </div>
                            <div>
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <Field type="password" name="confirmPassword" />
                                {formik.touched.confirmPassword && formik.errors.confirmPassword && <div>{formik.errors.confirmPassword}</div>}
                            </div>
                            <button type="submit" className="register-btn">Register</button>
                        </Form>
                    )}
                </Formik>
                <button onClick={onClose}>Close</button>
            </StyledContainer>
        </StyledModal>
    );
};

const StyledModal = styled(Modal)`
    position: fixed;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    max-width: 400px;
    max-height: 400px;
    width: 150%;

    .overlay {
        background-color: transparent; 
    }
`;

const StyledBackgroundImage = styled(BackgroundImage)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); 
    z-index: -1;
`;

const StyledContainer = styled.div`
    text-align: center;
`;

export default RegisterPopup;
