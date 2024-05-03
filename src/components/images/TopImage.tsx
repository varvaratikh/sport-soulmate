import React from 'react';
import styled from 'styled-components';

interface TopImageProps {
    imagePath: string;
}

const TopImageContainer = styled.div`
    width: 100%;
    height: 300px; 
`;

const TopImage: React.FC<TopImageProps> = ({ imagePath }) => {
    return (
        <TopImageContainer>
            <img src={imagePath} alt="Top Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </TopImageContainer>
    );
};

export default TopImage;
