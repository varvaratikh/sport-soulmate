import React from 'react';
import styled from 'styled-components';

interface Props {
    className?: string;
    onClick?: () => void;
}

const DarkBackground: React.FC<Props> = ({ className, onClick }) => {
    return <StyledDarkBackground className={className} onClick={onClick} />;
};

const StyledDarkBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); // Темный цвет фона
    z-index: 9999;
`;

export default DarkBackground;