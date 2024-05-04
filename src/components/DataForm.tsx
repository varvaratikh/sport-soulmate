import React from 'react';
import styled from 'styled-components';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

interface DataFormProps {
    onChange: (field: string, value: string) => void;
    onSave: () => void;
}

const InputFieldWrapper = styled.div`
    width: 100%;
    margin-bottom: 20px;
    margin-top: 10px;
`;

const InputField = styled(Field)`
    width: 100%;
    height: 40px;
    border-radius: 20px;
    padding: 0 15px;
    font-size: 16px;
    border: 1px solid ${props => props.error ? 'red' : '#ccc'}; 
`;

const ErrorText = styled.div`
    color: red;
    font-size: 12px;
    margin-top: 5px;
    margin-left: 15px;
`;

const DataFormContainer = styled.div`
    width: 35%;
    height: 40%;
    background-color: #ffffff;
    padding: 60px;
    border-radius: 30px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    text-align: left;
    margin-top: 327px;
    display: flex;
    flex-direction: column; 
    align-items: flex-start;
    margin-bottom: 5px;
`;

const Label = styled.label`
    font-size: 18px;
    margin-bottom: 40px;
    font-weight: 300;
`;

const Button = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    border-color: #0056b3;
    border-radius: 20px;
    background-color: transparent;
    color: #0056b3;
    cursor: pointer;
    
    &:hover {
        background-color: #0056b3;
        color: white;
    }
`;

const DataForm: React.FC<DataFormProps> = ({ onChange, onSave }) => {
    const initialValues = {
        sport: '',
        age: '',
        city: '',
    };

    const validationSchema = Yup.object({
        age: Yup.number()
            .typeError('Некорректное значение')
            .positive('Некорректное значение')
            .integer('Некорректное значение')
            .negative('Некорректное значение')
    });

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transform: 'translateX(20%)',
            }}
        >
            <DataFormContainer>
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
                        <Form>
                            <Label htmlFor="sport">Вид спорта</Label>
                            <InputFieldWrapper>
                                <InputField
                                    id="sport"
                                    name="sport"
                                    type="text"
                                />
                            </InputFieldWrapper>

                            <Label htmlFor="age">Возраст</Label>
                            <InputFieldWrapper>
                                <InputField
                                    id="age"
                                    name="age"
                                    type="number"
                                    error={formik.errors.age && formik.touched.age}
                                    className={formik.errors.age && formik.touched.age ? 'input-error' : ''}
                                />
                                <ErrorMessage name="age" component={ErrorText} />
                            </InputFieldWrapper>

                            <Label htmlFor="city">Город</Label>
                            <InputFieldWrapper>
                                <InputField
                                    id="city"
                                    name="city"
                                    type="text"
                                />
                            </InputFieldWrapper>

                            <Button type="submit" disabled={formik.isSubmitting}>
                                Сохранить
                            </Button>
                        </Form>
                    )}
                </Formik>
            </DataFormContainer>
        </div>
    );
};

export default DataForm;
