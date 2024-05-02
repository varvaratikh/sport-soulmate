import React from 'react';

interface ButtonProps {
    label: string;
    onClick?: () => void;
    style?: React.CSSProperties;
    className?: string;
    type?: "button" | "submit" | "reset" | undefined;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, style, className, type = "button" }) => {
    return (
        <button type={type} className={`button ${className}`} onClick={onClick} style={style}>{label}</button>
    );
};

export default Button;
