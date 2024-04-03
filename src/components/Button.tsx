import React from 'react';

interface ButtonProps {
    label: string;
    onClick: () => void;
    style?: React.CSSProperties; // Добавляем опциональное свойство style типа React.CSSProperties
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, style, className }) => {
    return (
        <button className={`button ${className}`} onClick={onClick} style={style}>{label}</button>
    );
};

export default Button;
