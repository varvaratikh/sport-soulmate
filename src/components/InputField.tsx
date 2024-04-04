import React, { ChangeEvent } from "react";

interface InputFieldProps {
    label: string;
    type?: string;
    value: string;
    onChange: (value: string) => void;
    className?: string; // Добавляем опциональное свойство className
}

const InputField: React.FC<InputFieldProps> = ({
                                                   label,
                                                   type = "text",
                                                   value,
                                                   onChange,
                                                   className // Принимаем className
                                               }) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    return (
        <div className={`input-field ${className}`}>
            <label style={{ fontSize: '150%' }}>{label}</label>
            <input
                type={type}
                value={value}
                onChange={handleChange}
                style={{ height: '45px', paddingLeft: '25px', paddingRight: '25px', fontSize: 18 }}
            />
        </div>
    );
};

export default InputField;
