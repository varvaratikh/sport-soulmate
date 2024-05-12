import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import BackgroundImage from '../../components/images/BackgroundImage';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import '../../styles/register.scss';

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
                <CloseButton onClick={onClose}>
                    <CrossIcon />
                </CloseButton>
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
                            <FieldContainer>
                                <label htmlFor="email">Email</label>
                                <InputField
                                    type="email"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={(value) => formik.setFieldValue('email', value)}
                                />
                                {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}
                            </FieldContainer>

                            <FieldContainer>
                                <label htmlFor="password">Password</label>
                                <InputField
                                    type="password"
                                    name="password"
                                    value={formik.values.password}
                                    onChange={(value) => formik.setFieldValue('password', value)}
                                />
                                {formik.touched.password && formik.errors.password && <div>{formik.errors.password}</div>}
                            </FieldContainer>

                            <FieldContainer>
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <InputField
                                    type="password"
                                    name="confirmPassword"
                                    value={formik.values.confirmPassword}
                                    onChange={(value) => formik.setFieldValue('confirmPassword', value)}
                                />
                                {formik.touched.confirmPassword && formik.errors.confirmPassword && <div>{formik.errors.confirmPassword}</div>}
                            </FieldContainer>
                            <StyledButton type="submit" label="Зарегистрироваться" className="register-btn" />
                        </Form>
                    )}
                </Formik>

                <Button label="Close" onClick={onClose} className="close-btn" />
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

const StyledButton = styled(Button)`
    margin-top: 20px; 
    color: cornflowerblue;
    border: 2px solid cornflowerblue;
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
