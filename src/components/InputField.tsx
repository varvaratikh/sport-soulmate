import React, { ChangeEvent } from "react";

interface InputFieldProps {
    type?: "text" | "password" | "email" | "number" | "tel" | "search" | undefined;
    value: string;
    onChange: (value: string) => void;
    className?: string;
    name?: string;
    label?: string;
    error?: string | undefined;
}

const InputField: React.FC<InputFieldProps> = ({
                                                   type = "text",
                                                   value,
                                                   onChange,
                                                   className,
                                                   name,
                                                   label,
                                                   error,
                                               }) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    return (
        <div className={`input-field ${error ? 'error' : ''} ${className || ''}`}>
            <label htmlFor={name} style={{marginBottom: '10px'}}>{label}</label>
            <input
                type={type}
                name={name}
                id={name}
                value={value}
                onChange={handleChange}
                className={error ? 'input-error' : ''}
                style={{
                    height: '45px',
                    paddingLeft: '25px',
                    paddingRight: '25px',
                    fontSize: 18,
                    borderRadius: '20px',
                    border: '1px solid #ccc'
                }}
            />
            {error && <div className="validation-message">{error}</div>}
        </div>
    );
};

export default InputField;
