import React, { useState } from 'react';
import styled from 'styled-components';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { BiAddToQueue } from 'react-icons/bi';
import Select from 'react-select';
import cities from 'cities.json';


interface DataFormProps {
    onChange: (field: string, value: string) => void;
    onSave: () => void;
}

type City = {
    country: string;
    name: string;
};

const InputFieldWrapper = styled.div`
  width: 100%;
  margin-bottom: 10px;
  margin-top: 5px;
  position: relative;
`;

const russianCities: { label: string; value: string }[] = (cities as City[])
    .filter(city => city.country === 'RU')
    .map(city => ({
        label: city.name,
        value: city.name
    }));

const StyledButton = styled.button`
  padding: 10px 20px;
    margin-top: 10px;
  font-size: 16px;
  border: 1px solid #0056b3;
  border-radius: 20px;
  background-color: transparent; 
  color: #0056b3; 
  cursor: pointer;
  transition: background-color 0.3s ease; 

  &:hover {
    background-color: #004080; 
      color: white;
  }

  &:disabled {
    opacity: 0.7; 
    cursor: not-allowed; 
  }
`;


const StyledLabel = styled.label`
  font-size: 18px;
  margin-top: 5px; 
  font-weight: 300;
  color: #333;
`;

const InputField = styled(Field)`
  width: 360px;
  height: 40px;
  border-radius: 20px;
  padding: 0 15px;
  font-size: 16px;
  border: 1px solid ${(props) => (props.error ? 'red' : '#ccc')};
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

const IconWrapper = styled.button`
  position: absolute;
  top: 50%;
  margin-right: 16%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const SportsList = styled.div`
    max-height: 100px;
    overflow-y: auto;
    display: flex;
    flex-wrap: wrap;
    margin-top: 5px;
    flex-grow: 1;
    flex-shrink: 0;
    
`;

const SportItem = styled.div`
  background-color: #f0f0f0;
  border-radius: 5px;
  padding: 5px 10px;
  margin-bottom: 15px;
    margin-right: 20px;
`;

const DataForm: React.FC<DataFormProps> = ({ onChange, onSave }) => {
    const [sports, setSports] = useState<string[]>([]);
    const initialValues = {
        sport: '',
        age: '',
        city: '',
    };

    const validationSchema = Yup.object({
        age: Yup.number()
            .typeError('Некорректное значение')
            .positive('Некорректное значение')
            .integer('Некорректное значение'),
    });

    const handleAddSport = (sport: string) => {
        if (sport.trim() !== '') {
            setSports((prevSports) => [...prevSports, sport]);
        }
    };

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
                            <StyledLabel htmlFor="sport">Вид спорта</StyledLabel>
                            <InputFieldWrapper>
                                <InputField id="sport" name="sport" type="text" />
                                <IconWrapper
                                    type="button"
                                    onClick={() => handleAddSport(formik.values.sport)}
                                >
                                    <BiAddToQueue />
                                </IconWrapper>
                            </InputFieldWrapper>
                            <SportsList>
                                {sports.map((sport, index) => (
                                    <SportItem key={index}>{sport}</SportItem>
                                ))}
                            </SportsList>
                            <StyledLabel htmlFor="age">Возраст</StyledLabel>
                            <InputFieldWrapper>
                                <InputField
                                    id="age"
                                    name="age"
                                    type="number"
                                    error={formik.errors.age && formik.touched.age}
                                    className={
                                        formik.errors.age && formik.touched.age ? 'input-error' : ''
                                    }
                                />
                                <ErrorMessage name="age" component={ErrorText} />
                            </InputFieldWrapper>

                            <StyledLabel htmlFor="city">Город</StyledLabel>
                            <InputFieldWrapper>
                                <Select
                                    id="city"
                                    name="city"
                                    options={russianCities}
                                    onChange={(option) => {
                                        if (option) {
                                            formik.setFieldValue('city', option.value);
                                        }
                                    }}
                                    onBlur={formik.handleBlur}
                                    value={russianCities.find(option => option.value === formik.values.city)}
                                />

                            </InputFieldWrapper>

                            <StyledButton type="submit" disabled={formik.isSubmitting}>
                                Сохранить
                            </StyledButton>
                        </Form>
                    )}
                </Formik>
            </DataFormContainer>
        </div>
    );
};

export default DataForm;