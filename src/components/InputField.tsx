import React, { ChangeEvent } from "react";

interface InputFieldProps {
    label: string;
    type?: "text" | "password" | "email" | "number" | "tel" | "search" | undefined;
    value: string;
    onChange: (value: string) => void;
    className?: string;
    name?: string;
}

const InputField: React.FC<InputFieldProps> = ({
                                                   label,
                                                   type = "text",
                                                   value,
                                                   onChange,
                                                   className,
                                                   name
                                               }) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    return (
        <div className={`input-field ${className}`}>
            <label style={{ fontSize: '150%' }}>{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={handleChange}
                style={{ height: '45px', paddingLeft: '25px', paddingRight: '25px', fontSize: 18 }}
            />
        </div>
    );
};

export default InputField;
