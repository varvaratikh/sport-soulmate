import React, { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { BiAddToQueue } from 'react-icons/bi';
import Select from 'react-select';
import cities from 'cities.json';
import './dataForm.scss';

interface DataFormProps {
    onChange: (field: string, value: string) => void;
    onSave: (data: any) => void;
}

type City = {
    country: string;
    name: string;
};

const russianCities: { label: string; value: string }[] = (cities as City[])
    .filter(city => city.country === 'RU')
    .map(city => ({
        label: city.name,
        value: city.name
    }));

const DataForm: React.FC<DataFormProps> = ({ onChange, onSave }) => {
    const [sports, setSports] = useState<string[]>([]);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [isEditing, setIsEditing] = useState<boolean>(true);
    const [submittedData, setSubmittedData] = useState<any>(null);
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

    const handleEdit = () => {
        setIsEditing(!isEditing);
        setIsSubmitted(false);
    };

    const handleSave = (values: typeof initialValues) => {
        console.log('Сохранено:', values);
        setIsEditing(false);
        setSubmittedData(values);
    };

    return (
        <div className="dataFormContainer">
            {isEditing ? (
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            onSave(values);
                            setIsSubmitted(true);
                            setIsEditing(false);
                            setSubmittedData(values);
                            setSubmitting(false);
                        }, 500);
                    }}
                >
                    {(formik) => (
                        <Form>
                            <label htmlFor="sport" className="styledLabel">Вид спорта</label>
                            <div className="inputFieldWrapper">
                                <Field id="sport" name="sport" type="text" className="inputField" />
                                <button
                                    type="button"
                                    onClick={() => handleAddSport(formik.values.sport)}
                                    className="iconWrapper"
                                >
                                    <BiAddToQueue />
                                </button>
                            </div>
                            <div className="sportsList">
                                {sports.map((sport, index) => (
                                    <div key={index} className="sportItem">{sport}</div>
                                ))}
                            </div>
                            <label htmlFor="age" className="styledLabel">Возраст</label>
                            <div className="inputFieldWrapper">
                                <Field
                                    id="age"
                                    name="age"
                                    type="number"
                                    className={`inputField ${formik.errors.age && formik.touched.age ? 'input-error' : ''}`}
                                />
                                <ErrorMessage name="age" component="div" className="errorText" />
                            </div>

                            <label htmlFor="city" className="styledLabel">Город</label>
                            <div className="inputFieldWrapper">
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
                            </div>
                            <button type="submit" className="styledButton" disabled={formik.isSubmitting}>
                                {isEditing ? 'Сохранить' : 'Изменить'}
                            </button>
                        </Form>
                    )}
                </Formik>
            ) : (
                <div>
                    {/* Отображаем сохраненные данные */}
                    <div>{submittedData.sport}</div>
                    <div>{submittedData.age}</div>
                    <div>{submittedData.city}</div>
                    <button onClick={() => setIsEditing(true)} className="styledButton">Изменить</button>
                </div>
            )}
        </div>
    );
};

export default DataForm;
